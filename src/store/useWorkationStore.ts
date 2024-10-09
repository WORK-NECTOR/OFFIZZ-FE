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
  workationId: 2, // 디폴트 0으로 수정
  setWorkationId: (id) => {
    set(() => ({ workationId: id }));
  },
  name: '데스커 강릉',
  setName: (name) => {
    set(() => ({ name }));
  },
  startDate: '2024-10-02',
  setStartDate: (date) => {
    set(() => ({ startDate: date }));
  },
  endDate: '2024-10-03',
  setEndDate: (date) => {
    set(() => ({ endDate: date }));
  },
}));

export default useWorkationStore;
