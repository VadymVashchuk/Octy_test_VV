import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { useQuery, gql } from '@apollo/client';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@components/Header';
import CommonText from '@components/CommonText';
import Divider from '@components/Divider';
import COLORS from '@style/colors';
import { POPULAR_CURRENCIES } from '@constants/popularCurrencies';

const ALL_CURRENCIES = gql`
  query AllCurrencies {
    currencies {
      code
      name
    }
  }
`;

export const LATEST_QUOTES = gql`
  query LatestQuotes($base: String!, $quotes: [String!]!) {
    latest(baseCurrency: $base, quoteCurrencies: $quotes) {
      date
      baseCurrency
      quoteCurrency
      quote
    }
  }
`;

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const baseCurrency = POPULAR_CURRENCIES[0]

  const { data, loading, error } = useQuery(LATEST_QUOTES, {
    variables: {
      base: 'EUR',
      quotes: POPULAR_CURRENCIES.map((currency) => currency.code),
    },
  });

  return (
    <View style={[styles.page]}>
      <Header title="Exchange rate" />
      <View style={[styles.content, { paddingLeft: insets.left || 16 }]}>
        <CommonText size={18}>Base currency:</CommonText>
        <CommonText size={10} color={COLORS.gray}>
          tap to change
        </CommonText>

        <View style={{

        }}>
          <Image source={baseCurrency.icon} style={{width: 50, height: 30, resizeMode: 'cover', backgroundColor: 'red'}} />
        </View>

        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && (
          <FlatList
            data={data.currencies}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <Text>
                {item.code} - {item.name}
              </Text>
            )}
          />
        )}
      </View>
      {/* <Divider /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 16,
    // padding: 24,
    // backgroundColor: '#242331'
  },
});

export default HomeScreen;
