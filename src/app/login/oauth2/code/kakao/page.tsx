'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { instance } from '@/api/axios';
import useAuth from '@/hook/useAuth';

function KakaoLoginPage() {
  const router = useRouter();
  const { setAccessToken, setRefreshToken } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code') || '';

    if (code) {
      instance
        .post('/auth/login/KAKAO', { code })
        .then((res) => {
          if (res.status === 200) {
            setAccessToken({
              token: res.data.accessToken,
              expire: res.data.accessExpiration,
            });
            setRefreshToken({
              token: res.data.refreshToken,
              expire: res.data.refreshExpiration,
            });
          }
          router.replace('/');
        })
        .catch((err) => {
          router.replace('/');
        });
    }
  }, []);
}

export default KakaoLoginPage;
