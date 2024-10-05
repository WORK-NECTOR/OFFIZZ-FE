import { create } from 'zustand';

interface ActivityState {
  id: number | null;
  setId: (id: number) => void;
}

const useTodoIdStore = create<ActivityState>((set) => ({
  id: null,
  setId: (id: number) => set({ id }),
}));

export default useTodoIdStore;
