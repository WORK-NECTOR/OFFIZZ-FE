'use client';

import Image from 'next/image';
// import kakao_login from '../../../public/kakao-login.png';
import thumbnail from '../../../public/thumbnail.png';
import offizz_logo from '../../../public/offizz-logo.png';
import styles from './page.module.css';
import { TOP_MAIN } from '@/constants/main';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // const loginHandler = () => {
  //   if (typeof window !== undefined) {
  //     const REDIRECT_URI = `${window.location.origin}/login/oauth2/code/kakao`;
  //     const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  //     window.location.href = link;
  //   }
  // };

  const loginHandler = () => {
    // 로그인 로직
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
          {/* <Image
            src={kakao_login}
            alt="카카오 로그인 버튼"
            onClick={loginHandler}
            className={styles['login-btn']}
          /> */}
          <div className={styles['login-form-container']}>
            <div className={styles['login-input-wrapper']}>
              <label htmlFor="email" className={styles['login-label']}>
                아이디
              </label>
              <input
                type="text"
                id="email"
                placeholder="이메일"
                className={styles['login-input']}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <form className={styles['login-input-wrapper']}>
              <label htmlFor="password" className={styles['login-label']}>
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                className={styles['login-input']}
                autoComplete="off"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </form>
          </div>
          <button className={styles['login-btn']} onClick={loginHandler}>
            로그인
          </button>
          <button
            className={styles['not-user-btn']}
            onClick={() => {
              router.push('/signup');
            }}
          >
            회원이 아니신가요?
          </button>
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
