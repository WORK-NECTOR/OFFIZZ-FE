import { create } from 'zustand';

interface StoreState {
  activeCategory: string;
  activeCategoryString: string,
  setActiveTab: (tab: string) => void;
  setActiveTabString: (tab: string) => void;
}

const useCategoryStore = create<StoreState>((set) => ({
  activeCategory: 'all',
  activeCategoryString: '공간',
  setActiveTab: (tab: string) => set({ activeCategory: tab }),
  setActiveTabString: (tab: string) => set({ activeCategory: tab }),
}));

export default useCategoryStore;
