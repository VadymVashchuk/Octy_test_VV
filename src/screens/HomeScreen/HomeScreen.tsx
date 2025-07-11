import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { GET_QUOTES } from '@api/quotes';
import { useQuery } from '@apollo/client';
import CommonText from '@components/CommonText';
import Divider from '@components/Divider';
import { POPULAR_CURRENCIES } from '@constants/popularCurrencies';
import Header from '@screens/HomeScreen/ScreenComponents/Header';
import { useQuotesStore } from '@store/quotesStore';
import COLORS from '@style/colors';
import { useCallback, useEffect, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { CurrencyQuote } from 'src/types/currencies';
import BaseCurrencySelector from './ScreenComponents/BaseCurrencyBlock';
import CurrencyQuoteElement from './ScreenComponents/CurrencyQuoteElement';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const quotes = useQuotesStore((store) => store.quotes);
  const triggerLastUpdated = useQuotesStore((store) => store.triggerLastUpdated);
  const setQuotes = useQuotesStore((store) => store.setQuotes);

  const { data, loading, error, refetch } = useQuery(GET_QUOTES, {
    variables: {
      base: 'EUR',
      quotes: POPULAR_CURRENCIES.map((currency) => currency.code),
    },
  });

  useEffect(() => {
    if (!data?.latest?.length) return;
    setQuotes(data.latest);
  }, [data]);

  const refreshQuotes = () => {
    refetch()
      .then((res) => {
        console.log('REFETCH RESULT:', res);
        triggerLastUpdated();
      })
      .catch(console.error);
  };

  // console.log(data);
  // console.log(loading);
  // console.log(error);

  const renderQuotes = useCallback(
    ({ item }: { item: CurrencyQuote }) => <CurrencyQuoteElement currencyQuote={item} />,
    []
  );

  const horizontalMargin = useMemo(
    () => ({ marginLeft: insets.left || 12, marginRight: insets.right || 12 }),
    [insets]
  );

  return (
    <View style={[styles.page]}>
      <Header refreshQuotes={refreshQuotes} />
      <View style={[styles.content]}>
        <View style={horizontalMargin}>
          <BaseCurrencySelector />
        </View>
        {error && (
          <CommonText color={COLORS.red} marginTop={8} alignCenter>
            Error: {error.message}
          </CommonText>
        )}
        <Divider height={8} />
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          </View>
        )}
        {!!quotes?.length && !loading && (
          <FlatList
            data={quotes}
            keyExtractor={(item) => item.quoteCurrency}
            renderItem={renderQuotes}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={horizontalMargin}
            ListFooterComponent={<Divider height={8} />}
          />
        )}
      </View>
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
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
