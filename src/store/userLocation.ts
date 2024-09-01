// store/useStore.ts

import { create } from 'zustand';

interface StoreState {
  userAddress: string | null;
  setUserAddress: (address: string) => void;
}

const useUserLocationStore = create<StoreState>((set) => ({
  userAddress: null,
  setUserAddress: (address: string) => set({ userAddress: address }),
}));

export default useUserLocationStore;
