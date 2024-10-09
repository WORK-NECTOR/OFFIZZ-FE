import { create } from 'zustand';

interface StoreState {
  activeCategory: string;
  setActiveTab: (tab: string) => void;
}

const useCategoryStore = create<StoreState>((set) => ({
  activeCategory: 'all',
  setActiveTab: (tab: string) => set({ activeCategory: tab }),
}));

export default useCategoryStore;
