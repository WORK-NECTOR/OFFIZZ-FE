'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { instance } from '@/api/axios';

function KakaoLoginPage() {
  const router = useRouter();
  const code = useRef('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    code.current = urlParams.get('code') || '';

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
  }, [code, router]);
}

export default KakaoLoginPage;
