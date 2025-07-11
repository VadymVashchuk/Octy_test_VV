import { Image, StyleSheet, View } from 'react-native';

import CommonText from '@components/CommonText';
import { BASE_CURRENCY } from '@constants/popularCurrencies';
import COLORS from '@style/colors';
import SHADOWS from '@style/shadows';

const BaseCurrencyBlock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <CommonText size={18}>Base currency:</CommonText>
      </View>
      <View style={styles.baseCurrencyBlock}>
        <View style={styles.baseCurrencyTitle}>
          <Image source={BASE_CURRENCY.icon} style={styles.flag} />
          <CommonText bold size={16}>
            {BASE_CURRENCY.code}
          </CommonText>
        </View>
        <CommonText alignCenter size={12}>
          {BASE_CURRENCY.name}
        </CommonText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    gap: 2,
  },
  baseCurrencyBlock: {
    gap: 2,
    width: 128,
    backgroundColor: COLORS.almostWhite,
    padding: 6,
    borderRadius: 8,
    ...SHADOWS.allSidesSmall,
  },
  baseCurrencyTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  flag: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BaseCurrencyBlock;
