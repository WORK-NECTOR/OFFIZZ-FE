// store/useStore.ts

import { create } from 'zustand';

interface StoreState {
  userAddress: string | null;
  userLat: number;
  userLng: number;
  setUserAddress: (address: string) => void;
  setUserLat: (Lat: number) => void;
  setUserLng: (Lng: number) => void;
}

const useUserLocationStore = create<StoreState>((set) => ({
  userAddress: null,
  userLat: 0,
  userLng: 0,
  setUserAddress: (address: string) => set({ userAddress: address }),
  setUserLat: (Lat: number) => set({ userLat: Lat }),
  setUserLng: (Lng: number) => set({ userLng: Lng }),
}));

export default useUserLocationStore;
