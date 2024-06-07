import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://example.com', // 추후 서버 주소 나오면 환경변수로 변경
  timeout: 5000,
});
