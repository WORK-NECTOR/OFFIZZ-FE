import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => config);
