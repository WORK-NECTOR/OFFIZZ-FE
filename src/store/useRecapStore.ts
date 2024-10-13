import { create } from 'zustand';
import { RecapDetailResponseType } from '@/api/recap/getRecapDetail';

interface RecapStoreType {
  recapDetailData: RecapDetailResponseType;
  setRecapDetailData: (data: RecapDetailResponseType) => void;
}

const useRecapStore = create<RecapStoreType>((set) => ({
  recapDetailData: {
    zeroPage: {
      name: '',
      address: '',
      startDate: '',
      endDate: '',
    },
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
      totalVacation: 0,
      averageRate: 0,
    },
    sixthPage: {
      rate: 0,
    },
    seventhPage: {
      bestVacations: [],
    },
  },
  setRecapDetailData: (data) => {
    set(() => ({ recapDetailData: data }));
  },
}));

export default useRecapStore;
