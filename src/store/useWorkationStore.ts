import { create } from 'zustand';

interface WorkationStoreType {
  workationId: number;
  setWorkationId: (id: number) => void;
}

const useWorkationStore = create<WorkationStoreType>((set) => ({
  workationId: 0,
  setWorkationId: (id) => {
    set(() => ({ workationId: id }));
  },
}));

export default useWorkationStore;
