import { ImageSourcePropType } from 'react-native';

export type Currency = {
  code: string;
  name: string;
  icon: ImageSourcePropType;
};

export interface CurrencyQuote {
  baseCurrency: string;
  quoteCurrency: string;
  quote: number;
}
