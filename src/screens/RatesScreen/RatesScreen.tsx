import { useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GET_QUOTES } from '@api/quotes';
import { useQuery } from '@apollo/client';
import CommonText from '@components/CommonText';
import Divider from '@components/Divider';
import { POPULAR_CURRENCIES } from '@constants/popularCurrencies';
import { useCurrenciesStore } from '@store/currenciesStore';
import { useQuotesStore } from '@store/quotesStore';
import COLORS from '@style/colors';
import type { CurrencyQuote } from 'src/types/currencies';
import appStyles from '@style/appStyles';
import Header from './ScreenComponents/Header';
import BaseCurrencyBlock from './ScreenComponents/BaseCurrencyBlock';
import CurrencyQuoteElement from './ScreenComponents/CurrencyQuoteElement';

const RatesScreen = () => {
  const insets = useSafeAreaInsets();

  const favorites = useCurrenciesStore((store) => store.favorites);
  const quotes = useQuotesStore((store) => store.quotes);
  const toggleFavorite = useCurrenciesStore((store) => store.toggleFavorite);
  const triggerLastUpdated = useQuotesStore((store) => store.triggerLastUpdated);
  const setQuotes = useQuotesStore((store) => store.setQuotes);

  const sortedQuotes = useMemo(() => {
    return [...quotes].sort((a, b) => {
      const isAFavorite = favorites.some((favorite) => favorite.quoteCurrency === a.quoteCurrency);
      const isBFavorite = favorites.some((favorite) => favorite.quoteCurrency === b.quoteCurrency);

      if (isAFavorite && !isBFavorite) return -1;
      if (!isAFavorite && isBFavorite) return 1;

      return a.quoteCurrency.localeCompare(b.quoteCurrency);
    });
  }, [quotes, favorites]);

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
      .then(() => {
        triggerLastUpdated();
      })
      .catch(console.error);
  };

  const renderQuotes = useCallback(
    ({ item }: { item: CurrencyQuote }) => {
      const isFavorite = favorites.some((cur) => cur.quoteCurrency === item.quoteCurrency);
      return (
        <CurrencyQuoteElement
          currencyQuote={item}
          onToggleFavorite={() => toggleFavorite(item)}
          isFavorite={!!isFavorite}
        />
      );
    },
    [favorites]
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
          <BaseCurrencyBlock />
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
        {!!sortedQuotes?.length && !loading && (
          <FlatList
            data={sortedQuotes}
            keyExtractor={(item) => item.quoteCurrency}
            renderItem={renderQuotes}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[horizontalMargin, styles.list]}
            style={appStyles.flex1}
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
  list: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RatesScreen;
