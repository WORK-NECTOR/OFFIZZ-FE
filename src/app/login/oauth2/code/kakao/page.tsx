'use client';
import { instance } from '@/api/axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function KakaoLoginPage() {
  const router = useRouter();
  let code = '';

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    code = urlParams.get('code') || '';

    if (code) {
      instance
        .post('/auth/login/KAKAO', { code })
        .then((res) => {
          if (res.status === 200) {
            // token 세팅 코드 추가
          }
          router.replace('/');
        })
        .catch((err) => {
          console.error(err);
          router.replace('/');
        });
    }
  }, [code]);
}

export default KakaoLoginPage;
