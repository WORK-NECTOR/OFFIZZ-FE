import { create } from 'zustand';

interface WorkationStoreType {
  workationId: number;
  setWorkationId: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  // address 필요하면 추후 추가
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

const useWorkationStore = create<WorkationStoreType>((set) => ({
  workationId: 0,
  setWorkationId: (id) => {
    set(() => ({ workationId: id }));
  },
  name: '',
  setName: (name) => {
    set(() => ({ name }));
  },
  startDate: '',
  setStartDate: (date) => {
    set(() => ({ startDate: date }));
  },
  endDate: '',
  setEndDate: (date) => {
    set(() => ({ endDate: date }));
  },
}));

export default useWorkationStore;
