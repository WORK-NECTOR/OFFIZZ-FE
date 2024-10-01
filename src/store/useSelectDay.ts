import { create } from 'zustand';

interface DayState {
  day: number;
  setDay: (day: number) => void;
}

const useDayStore = create<DayState>((set) => ({
  day: 1, 
  setDay: (day: number) => set({ day }),
}));

export default useDayStore;
