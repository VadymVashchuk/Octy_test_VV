import { ImageSourcePropType } from 'react-native';

export type PopularCurrency = {
  code: string;
  name: string;
  icon: ImageSourcePropType;
};

// export const CURRENCY_ICONS = {
//   USD: require('@assets/flags/us.png'),
//   EUR: require('@assets/flags/eu.png'),
//   GBP: require('@assets/flags/uk.png'),
//   JPY: require('@assets/flags/jp.png'),
//   CHF: require('@assets/flags/ch.png'),
//   CAD: require('@assets/flags/ca.png'),
//   CNY: require('@assets/flags/cn.png'),
//   SEK: require('@assets/flags/se.png'),
//   UAH: require('@assets/flags/ua.png'),
//   PLN: require('@assets/flags/pl.png'),
// };

export const POPULAR_CURRENCIES: PopularCurrency[] = [
  { code: 'USD', name: 'United States dollar', icon: require('@assets/flags/us.png') },
  { code: 'EUR', name: 'Euro', icon: require('@assets/flags/eu.png') },
  { code: 'GBP', name: 'Pound sterling', icon: require('@assets/flags/uk.png') },
  { code: 'JPY', name: 'Japanese yen', icon: require('@assets/flags/jp.png') },
  { code: 'CHF', name: 'Swiss franc', icon: require('@assets/flags/ch.png') },
  { code: 'CAD', name: 'Canadian dollar', icon: require('@assets/flags/ca.png') },
  { code: 'CNY', name: 'Renminbi (Chinese) yuan', icon: require('@assets/flags/cn.png') },
  { code: 'SEK', name: 'Swedish krona/kronor', icon: require('@assets/flags/se.png') },
  { code: 'UAH', name: 'Ukrainian hryvnia', icon: require('@assets/flags/ua.png') },
  { code: 'PLN', name: 'Polish złoty', icon: require('@assets/flags/pl.png') },
];
