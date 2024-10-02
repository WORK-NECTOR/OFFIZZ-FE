// store/useStore.ts

import { create } from 'zustand';

interface StoreState {
  activeTab: string; // 현재 활성 탭
  setActiveTab: (tab: string) => void; // 탭 상태 설정 함수
}

const useTabStore = create<StoreState>((set) => ({
  activeTab: '/information', // 초기 탭
  setActiveTab: (tab: string) => set({ activeTab: tab }), // 탭 상태 업데이트 함수
}));

export default useTabStore;
