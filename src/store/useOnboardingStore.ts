import { create } from 'zustand';

interface OnboardingType {
  reason: string;
  setReason: (reason: string) => void;
}

const useOnboardingStore = create<OnboardingType>((set) => ({
  reason: '',
  setReason: (text) => {
    set(() => ({ reason: text }));
  },
}));

export default useOnboardingStore;
