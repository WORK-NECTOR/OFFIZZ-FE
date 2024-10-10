'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import thumbnail from '../../../public/thumbnail.png';
import offizz_logo from '../../../public/offizz-logo.png';
import styles from './page.module.css';
import { TOP_MAIN } from '@/constants/main';
import useAuth from '@/hook/useAuth';

function SignupPage() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [btnActive, setBtnActive] = useState(false);
  const router = useRouter();
  const { setAccessToken, setRefreshToken } = useAuth();

  useEffect(() => {
    setBtnActive(
      email.length > 0 &&
        emailRegex.test(email) &&
        password.length > 0 &&
        passwordCheck.length > 0 &&
        password === passwordCheck,
    );
  }, [email, password, passwordCheck]);

  const signupHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (btnActive) {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`, {
          email,
          password,
        })
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
          console.error(err);
        });
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
          <form
            className={styles['signup-form-container']}
            onSubmit={signupHandler}
          >
            <div className={styles['signup-input-wrapper']}>
              <label htmlFor="email" className={styles['signup-label']}>
                이메일
              </label>
              <input
                type="email"
                id="email"
                placeholder="offizz@gmail.com"
                className={styles['signup-input']}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              />
            </div>
            <div className={styles['signup-input-wrapper']}>
              <label htmlFor="password" className={styles['signup-label']}>
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                className={styles['signup-input']}
                autoComplete="off"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <div className={styles['signup-input-wrapper']}>
              <label
                htmlFor="password-check"
                className={styles['signup-label']}
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="password-check"
                placeholder="비밀번호 확인"
                className={styles['signup-input']}
                autoComplete="off"
                onChange={(e) => setPasswordCheck(e.currentTarget.value)}
              />
            </div>
            {password.length > 0 &&
              passwordCheck.length > 0 &&
              password !== passwordCheck && (
                <div className={styles['pwd-validator']}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            <button
              type="submit"
              className={styles['signup-btn']}
              data-active={btnActive}
              disabled={!btnActive}
            >
              회원가입
            </button>
          </form>
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

export default SignupPage;
