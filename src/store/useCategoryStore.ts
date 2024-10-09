import { create } from 'zustand';

interface StoreState {
  activeCategory: string; // 현재 활성 탭
  setActiveTab: (tab: string) => void; // 탭 상태 설정 함수
}

const useCategoryStore = create<StoreState>((set) => ({
  activeCategory: 'all',
  setActiveTab: (tab: string) => set({ activeCategory: tab }), // 탭 상태 업데이트 함수
}));

export default useCategoryStore;
