import { create } from 'zustand';

interface UserStoreType {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

const useUserStore = create<UserStoreType>((set) => ({
  accessToken: '',
  setAccessToken: (token) => {
    set(() => ({ accessToken: token }));
  },
}));

export default useUserStore;
