export type UIStoreState = {
    isDarkMode: boolean;
    isAppSiderOpen: boolean;
}

export type UIStoreActions = {
    toggleMode: () => void;
    setAppSiderOpen: (openState: boolean) => void;
    reset: () => void;
}

export type UIStoreSlice = UIStoreState & UIStoreActions;