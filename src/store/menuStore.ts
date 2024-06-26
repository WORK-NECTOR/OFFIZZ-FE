import { create } from 'zustand';
import { HEADER_TEXT } from '@/constants/header';
import { HeaderTextUnion } from '@/types/header.type';

interface HeaderMenuStoreType {
  selectedMenu: HeaderTextUnion;
  setSelectedMenu: (menu: HeaderTextUnion) => void;
}

const useHeaderMenuStore = create<HeaderMenuStoreType>((set) => ({
  selectedMenu: HEADER_TEXT.home,
  setSelectedMenu: (menu) => {
    set(() => ({ selectedMenu: menu }));
  },
}));

export default useHeaderMenuStore;
