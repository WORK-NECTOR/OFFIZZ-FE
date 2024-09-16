import { create } from 'zustand';

interface StepType {
  step: number;
  setStep: (step: number) => void;
  incrementStep: () => void;
  decrementStep: () => void;
}

const useStepstore = create<StepType>((set) => ({
  step: 0,
  setStep: (step) => {
    set(() => ({ step: step }));
  },
  incrementStep: () => {
    set((state) => ({
      step: state.step < 9 ? state.step + 1 : state.step,
    }));
  },
  decrementStep: () => {
    set((state) => ({
      step: state.step > 0 ? state.step - 1 : state.step,
    }));
  },
}));

export default useStepstore;
