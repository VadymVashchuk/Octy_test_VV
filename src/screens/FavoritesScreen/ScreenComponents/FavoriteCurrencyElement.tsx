import { memo } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonText from '@components/CommonText';
import { BASE_CURRENCY, POPULAR_CURRENCIES } from '@constants/popularCurrencies';
import { useCurrenciesStore } from '@store/currenciesStore';
import COLORS from '@style/colors';
import SHADOWS from '@style/shadows';
import type { CurrencyQuote } from 'src/types/currencies';

type FavoriteCurrencyElementProps = {
  currencyQuote: CurrencyQuote;
};

const FavoriteCurrencyElement = memo(({ currencyQuote }: FavoriteCurrencyElementProps) => {
  const toggleFavorite = useCurrenciesStore((store) => store.toggleFavorite);

  const baseCurrency = currencyQuote.baseCurrency === BASE_CURRENCY.code;
  const currency = POPULAR_CURRENCIES.find((cur) => cur.code === currencyQuote.quoteCurrency);

  if (!currency || !baseCurrency) return null;

  return (
    <View style={styles.element}>
      <View style={styles.currenciesRow}>
        <View style={styles.currencyContainer}>
          <CommonText size={19} color={COLORS.white} bold>
            {BASE_CURRENCY.code}
          </CommonText>
          <Image source={BASE_CURRENCY.icon} style={styles.flag} />
        </View>
        <MaterialCommunityIcons name={'swap-horizontal-bold'} color={COLORS.almostWhite} size={40} />
        <View style={styles.currencyContainer}>
          <CommonText size={19} color={COLORS.white} bold>
            {currency.code}
          </CommonText>
          <Image source={currency.icon} style={styles.flag} />
        </View>
      </View>
      <CommonText size={24} color={COLORS.white}>
        {`1 : ${currencyQuote.quote.toFixed(2).toString()}`}
      </CommonText>
      <Pressable style={styles.removeIcon} onPress={() => toggleFavorite(currencyQuote)}>
        <MaterialCommunityIcons name={'heart-off-outline'} color={COLORS.lightGray} size={22} />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 4,
    gap: 6,
    ...SHADOWS.cardShadow,
  },
  currenciesRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyContainer: {
    alignItems: 'center',
  },
  flag: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  removeIcon: {
    position: 'absolute',
    top: 6,
    right: 2,
  },
});

export default FavoriteCurrencyElement;
