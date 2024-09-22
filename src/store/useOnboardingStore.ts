import { TimeFormat } from '@/types/timeRange.type';
import { create } from 'zustand';

interface OnboardingType {
  reason: string;
  setReason: (reason: string) => void;
  fromDate: string;
  setFromDate: (date: string) => void;
  toDate: string;
  setToDate: (date: string) => void;
  place: string;
  setPlace: (place: string) => void;
  coreTimeStart: TimeFormat;
  setCoreTimeStart: (time: TimeFormat) => void;
  coreTimeEnd: TimeFormat;
  setCoreTimeEnd: (time: TimeFormat) => void;
}

const useOnboardingStore = create<OnboardingType>((set) => ({
  reason: '',
  setReason: (text) => {
    set(() => ({ reason: text }));
  },
  fromDate: '',
  setFromDate: (date) => {
    set(() => ({ fromDate: date }));
  },
  toDate: '',
  setToDate: (date) => {
    set(() => ({ toDate: date }));
  },
  place: '',
  setPlace: (place) => {
    set(() => ({ place }));
  },
  coreTimeStart: '00:00',
  setCoreTimeStart: (time) => {
    set(() => ({ coreTimeStart: time }));
  },
  coreTimeEnd: '00:00',
  setCoreTimeEnd: (time) => {
    set(() => ({ coreTimeEnd: time }));
  },
}));

export default useOnboardingStore;
