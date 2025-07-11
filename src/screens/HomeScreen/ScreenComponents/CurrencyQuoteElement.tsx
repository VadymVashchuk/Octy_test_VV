import { Image, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonText from '@components/CommonText';
import { POPULAR_CURRENCIES } from '@constants/popularCurrencies';
import appStyles from '@style/appStyles';
import COLORS from '@style/colors';
import SHADOWS from '@style/shadows';
import type { CurrencyQuote } from 'src/types/currencies';

type CurrencyQuoteElementProps = {
  currencyQuote: CurrencyQuote;
};

const CurrencyQuoteElement = ({ currencyQuote }: CurrencyQuoteElementProps) => {
  const currency = POPULAR_CURRENCIES.find((cur) => cur.code === currencyQuote.quoteCurrency);

  if (!currency) return null;

  return (
    <View style={styles.element}>
      <Image source={currency.icon} style={styles.flag} />
      <View style={appStyles.flex1}>
        <CommonText size={22} color={COLORS.white} bold>
          {currency.code}
        </CommonText>
        <CommonText size={12} color={COLORS.almostWhite}>
          {currency.name}
        </CommonText>
      </View>
      <CommonText size={24} color={COLORS.white}>
        {currencyQuote.quote.toFixed(2).toString()}
      </CommonText>
      <MaterialCommunityIcons name={'heart'} color={COLORS.white} size={26} />
    </View>
  );
};

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
  flag: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
});

export default CurrencyQuoteElement;
