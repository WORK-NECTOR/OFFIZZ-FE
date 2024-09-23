import { TimeFormat } from '@/types/timeRange.type';
import { VisitPlaceType } from '@/types/visit.type';
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
  coreTimeStart: TimeFormat | '';
  setCoreTimeStart: (time: TimeFormat) => void;
  coreTimeEnd: TimeFormat | '';
  setCoreTimeEnd: (time: TimeFormat) => void;
  travel: Array<string>;
  setTravel: (travels: Array<string>) => void;
  workplace: Array<string>;
  setWorkplace: (workplaces: Array<string>) => void;
  visitPlace: Array<VisitPlaceType>;
  setVisitPlace: (visitPlaces: Array<VisitPlaceType>) => void;
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
  coreTimeStart: '',
  setCoreTimeStart: (time) => {
    set(() => ({ coreTimeStart: time }));
  },
  coreTimeEnd: '',
  setCoreTimeEnd: (time) => {
    set(() => ({ coreTimeEnd: time }));
  },
  travel: [],
  setTravel: (travels) => {
    set(() => ({ travel: travels }));
  },
  workplace: [],
  setWorkplace: (workplaces) => {
    set(() => ({ workplace: workplaces }));
  },
  visitPlace: [],
  setVisitPlace: (visitPlaces) => {
    set(() => ({ visitPlace: visitPlaces }));
  },
}));

export default useOnboardingStore;
