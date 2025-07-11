import type { Currency } from 'src/types/currencies';

export const BASE_CURRENCY: Currency = {
  code: 'EUR',
  name: 'Euro',
  icon: require('@assets/flags/eu.png'),
};

export const POPULAR_CURRENCIES: Currency[] = [
  { code: 'USD', name: 'United States dollar', icon: require('@assets/flags/us.png') },
  { code: 'GBP', name: 'Pound sterling', icon: require('@assets/flags/uk.png') },
  { code: 'JPY', name: 'Japanese yen', icon: require('@assets/flags/jp.png') },
  { code: 'CHF', name: 'Swiss franc', icon: require('@assets/flags/ch.png') },
  { code: 'CAD', name: 'Canadian dollar', icon: require('@assets/flags/ca.png') },
  { code: 'CNY', name: 'Renminbi (Chinese) yuan', icon: require('@assets/flags/cn.png') },
  { code: 'SEK', name: 'Swedish krona/kronor', icon: require('@assets/flags/se.png') },
  { code: 'UAH', name: 'Ukrainian hryvnia', icon: require('@assets/flags/ua.png') },
  { code: 'PLN', name: 'Polish złoty', icon: require('@assets/flags/pl.png') },
];
