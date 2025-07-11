import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Currency } from 'src/types/currencies';

type CurrenciesStore = {
  favorites: Currency[];
  addFavorite: (currency: Currency) => void;
  removeFavorite: (currency: Currency) => void;
};

export const useCurrenciesStore = create<CurrenciesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (currency) =>
        set((state) =>
          state.favorites.find((c) => c.code === currency.code) ? state : { favorites: [...state.favorites, currency] }
        ),

      removeFavorite: (currency) =>
        set((state) => ({
          favorites: state.favorites.filter((c) => c.code !== currency.code),
        })),
    }),
    {
      name: 'currencies-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
