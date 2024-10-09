import { create } from 'zustand';

interface WorkationStoreType {
  workationId: number;
  setWorkationId: (id: number) => void;
}

const useWorkationStore = create<WorkationStoreType>((set) => ({
  workationId: 2, // 디폴트 0으로 수정
  setWorkationId: (id) => {
    set(() => ({ workationId: id }));
  },
}));

export default useWorkationStore;
