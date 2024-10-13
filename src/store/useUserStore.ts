import { create } from 'zustand';

interface UserStoreType {
  name: string;
  setName: (name: string) => void;
  accessToken: string;
  setAccessToken: (token: string) => void;
}

const useUserStore = create<UserStoreType>((set) => ({
  name: '사용자',
  setName: (name) => {
    set(() => ({ name }));
  },
  accessToken: '',
  setAccessToken: (token) => {
    set(() => ({ accessToken: token }));
  },
}));

export default useUserStore;
