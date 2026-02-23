import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import type { UIStoreSlice, UIStoreState } from './ui/types';
import { LOCAL_STORAGE_KEYS } from '../config/constants';


const initialState: UIStoreState = {
    isDarkMode: false,
    isAppSiderOpen: true,
}

export const useUIStore = create<UIStoreSlice>()(
    persist(
        (set) => ({
            ...initialState,

            toggleMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),
             setAppSiderOpen: (openState) =>
        set(() => ({
          isAppSiderOpen: openState,
        })),

            reset: () => {
                set(initialState);
                useUIStore.persist.clearStorage();
            },
        }),
        {
      name: LOCAL_STORAGE_KEYS.UI_STORE,
      version: 1,
    },

    )
)