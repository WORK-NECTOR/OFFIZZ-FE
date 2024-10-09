import { RecapDetailResponseType } from '@/api/recap/getRecapDetail';
import { create } from 'zustand';

interface RecapStoreType {
  recapDetailData: RecapDetailResponseType;
  setRecapDetailData: (data: RecapDetailResponseType) => void;
}

const useRecapStore = create<RecapStoreType>((set) => ({
  recapDetailData: {
    firstPage: {
      reason: '',
    },
    secondPage: {
      totalTime: 0,
      startTime: '',
      endTime: '',
      averageTime: 0,
    },
    thirdPage: {
      rate: 0,
    },
    fourthPage: {
      passionDate: '',
      diff: 0,
    },
    fifthPage: {
      bestWorkDays: [],
    },
    sixthPage: {
      totalVacation: 0,
      averageRate: 0,
    },
    seventhPage: {
      bestVacationDays: [],
    },
    eighthPage: {
      bestVacations: [],
    },
  },
  setRecapDetailData: (data) => {
    set(() => ({ recapDetailData: data }));
  },
}));

export default useRecapStore;
