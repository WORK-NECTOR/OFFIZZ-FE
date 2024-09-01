import useUserStore from '@/store/useUserStore';
import axios from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const { accessToken } = useUserStore.getState();

  if (accessToken) {
    config.headers.set('Authorization', accessToken);
  }

  return config;
});
