'use client';

import Image from 'next/image';
import kakao_login from '../../../public/kakao-login.png';
import thumbnail from '../../../public/thumbnail.png';
import offizz_logo from '../../../public/offizz-logo.png';
import styles from './page.module.css';
import { TOP_MAIN } from '@/constants/main';

function LoginPage() {
  const loginHandler = () => {
    if (typeof window !== undefined) {
      const REDIRECT_URI = `${window.location.origin}/login/oauth2/code/kakao`;
      const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      window.location.href = link;
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles['fir-section']}>
        <div className={styles['fir-section-container']}>
          <Image
            src={offizz_logo}
            alt="offizz 로고"
            className={styles['logo-img']}
          />
          <p className={styles['service-text']}>{TOP_MAIN.title}</p>
          <Image
            src={kakao_login}
            alt="카카오 로그인 버튼"
            onClick={loginHandler}
            className={styles['login-btn']}
          />
        </div>
      </section>
      <section className={styles['sec-section']}>
        <Image
          src={thumbnail}
          alt="메인 이미지"
          className={styles['thumbnail-img']}
        />
      </section>
    </main>
  );
}

export default LoginPage;
