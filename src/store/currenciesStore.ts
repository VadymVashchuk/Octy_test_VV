import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { CurrencyQuote } from 'src/types/currencies';

type CurrenciesStore = {
  favorites: CurrencyQuote[];
  toggleFavorite: (currency: CurrencyQuote) => void;
};

export const useCurrenciesStore = create<CurrenciesStore>()(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (currency) =>
        set((state) => {
          const exists = state.favorites.some((cur) => cur.quoteCurrency === currency.quoteCurrency);
          if (exists) {
            return { favorites: state.favorites.filter((cur) => cur.quoteCurrency !== currency.quoteCurrency) };
          } else {
            return { favorites: [...state.favorites, currency] };
          }
        }),
    }),
    {
      name: 'currencies-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
