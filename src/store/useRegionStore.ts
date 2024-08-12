import { regionArr } from '@/constants/office';
import { create } from 'zustand';

type Region = (typeof regionArr)[number]['region'];

interface RegionStoreType {
  selectedRegion: Region;
  setSelectedRegion: (region: Region) => void;
}

const useRegionStore = create<RegionStoreType>((set) => ({
  selectedRegion: regionArr[0].region,
  setSelectedRegion: (region) => {
    set(() => ({ selectedRegion: region }));
  },
}));

export default useRegionStore;
