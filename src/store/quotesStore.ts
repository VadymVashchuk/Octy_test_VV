import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { CurrencyQuote } from 'src/types/currencies';

type CurrencyQuotesStore = {
  quotes: CurrencyQuote[];
  lastUpdated: string | null;
  setQuotes: (quotes: CurrencyQuote[]) => void;
  triggerLastUpdated: () => void;
};

export const useQuotesStore = create<CurrencyQuotesStore>()(
  persist(
    (set) => ({
      quotes: [],
      lastUpdated: null,
      setQuotes: (quotes) => set({ quotes, lastUpdated: new Date().toISOString() }),
      triggerLastUpdated: () => set({ lastUpdated: new Date().toISOString() }),
    }),
    {
      name: 'quotes-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
