import { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CommonText from '@components/CommonText';
import Divider from '@components/Divider';
import { useCurrenciesStore } from '@store/currenciesStore';
import { useQuotesStore } from '@store/quotesStore';
import COLORS from '@style/colors';
import { getFormattedDate } from '@tools/dates';
import { CurrencyQuote } from 'src/types/currencies';
import FavoriteCurrencyElement from './ScreenComponents/FavoriteCurrencyElement';
import Header from './ScreenComponents/Header';

const FavoritesScreen = () => {
  const insets = useSafeAreaInsets();

  const favorites = useCurrenciesStore((store) => store.favorites);
  const lastUpdated = useQuotesStore((store) => store.lastUpdated);

  const sortedFavorites = useMemo(() => {
    return [...favorites].sort((a, b) => {
      return a.quoteCurrency.localeCompare(b.quoteCurrency);
    });
  }, [favorites]);

  const renderFavorites = useCallback(
    ({ item }: { item: CurrencyQuote }) => {
      return <FavoriteCurrencyElement currencyQuote={item} />;
    },
    [favorites]
  );

  const horizontalMargin = useMemo(
    () => ({ marginLeft: insets.left || 12, marginRight: insets.right || 12 }),
    [insets]
  );

  return (
    <View style={[styles.page]}>
      <Header />
      {!!lastUpdated && !!sortedFavorites?.length && (
        <CommonText size={11} color={COLORS.gray} alignCenter marginTop={8} marginBottom={8}>
          Last updated:{' '}
          <CommonText size={12} color={COLORS.gray} bold>
            {getFormattedDate(lastUpdated)}
          </CommonText>
        </CommonText>
      )}
      <View style={[styles.content]}>
        <FlatList
          data={sortedFavorites}
          keyExtractor={(item) => item.baseCurrency + item.quoteCurrency}
          renderItem={renderFavorites}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[horizontalMargin, styles.list]}
          ListFooterComponent={<Divider height={8} />}
          ListEmptyComponent={
            <View style={styles.emptyMessage}>
              <CommonText color={COLORS.gray} size={18}>
                No favorites saved yet
              </CommonText>
            </View>
          }
        />
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
  },
  list: {
    flexGrow: 1,
  },
  emptyMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
