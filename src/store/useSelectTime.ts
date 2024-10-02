import create from 'zustand';

interface TimeState {
  time: string | null;
  setTime: (time: string) => void;
}

const useTimeStore = create<TimeState>((set) => ({
  time: null,
  setTime: (time: string) => set({ time }),
}));

export default useTimeStore;
