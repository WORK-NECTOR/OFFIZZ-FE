import { create } from 'zustand';

interface ActivityState {
  id: number | null;
  content: string | null;
  image: string | null;
  palce: string | null;
  setId: (id: number) => void;
  setContent: (content: string) => void;
  setImage: (image: string) => void;
  setPlace: (palce: string) => void;
}

const useTodoIdStore = create<ActivityState>((set) => ({
  id: null,
  content: null,
  image: null,
  palce: null,
  setId: (id: number) => set({ id }),
  setContent: (content: string) => set({ content }),
  setImage: (image: string) => set({ image }),
  setPlace: (palce: string) => set({ palce }),
}));

export default useTodoIdStore;
