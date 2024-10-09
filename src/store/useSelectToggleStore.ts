// store/useStore.ts

import { create } from 'zustand';

interface StoreState {
  activeToggle: string; // 현재 활성 탭
  setToggleTab: (tab: string) => void; // 탭 상태 설정 함수
}

const useSelectToggleStore = create<StoreState>((set) => ({
    activeToggle: 'work', // 초기 탭
  setToggleTab: (tab: string) => set({ activeToggle: tab }), // 탭 상태 업데이트 함수
}));

export default useSelectToggleStore;
