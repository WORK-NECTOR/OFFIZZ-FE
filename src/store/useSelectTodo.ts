import create from 'zustand';

interface ActivityState {
  activity: string | null;
  setActivity: (activity: string) => void; }

const useActivityStore = create<ActivityState>((set) => ({
  activity: null,
  setActivity: (activity: string) => set({ activity }),
}));

export default useActivityStore;