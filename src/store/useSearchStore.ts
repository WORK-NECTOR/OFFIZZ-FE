import { create } from 'zustand';

interface SearchType {
  keyword: string;
  setKeyword: (word: string) => void;
}

const useSearchStore = create<SearchType>((set) => ({
  keyword: '',
  setKeyword: (word) => {
    set(() => ({ keyword: word }));
  },
}));

export default useSearchStore;
