'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import thumbnail from '../../public/thumbnail.png';
import TitleDesc from '@/components/TitleDesc';
import {
  DASHBOARD_MAIN,
  RETROSPECT_MAIN,
  TODO_MAIN,
  TOP_MAIN,
} from '@/constants/main';
import Button from '@/components/Button';
import { Fragment } from 'react';
import styles from './page.module.css';

export default function MainPage() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <section className={styles['first-main']}>
          <section className={styles['first-main-text']}>
            <p className={styles['first-main-title']}>{TOP_MAIN.slogan}</p>
            <div id="title-desc-wrapper">
              <TitleDesc
                title={TOP_MAIN.title}
                desc={TOP_MAIN.desc}
                sort="left"
              />
            </div>
            <Button
              btnSize="small"
              btnText={TOP_MAIN.start}
              btnType="full"
              btnColor="var(--blue-main)"
              textColor="var(--white-main)"
              hoverColor="var(--blue-dark)"
            />
          </section>
          <div className={styles['first-main-image-wrapper']}>
            <Image
              src={thumbnail}
              alt="서비스 메인 이미지"
              className={styles['first-main-image']}
            />
          </div>
        </section>
        <section className={styles['second-main']}>
          <p className={styles['main-index']} style={{ textAlign: 'center' }}>
            {DASHBOARD_MAIN.index}
          </p>
          <TitleDesc
            title={DASHBOARD_MAIN.title}
            desc={DASHBOARD_MAIN.desc}
            sort="center"
          />
          <div className={styles['second-main-image-wrapper']}>
            <Image
              src={thumbnail}
              alt="임시 이미지"
              className={styles['second-main-image']}
            />
          </div>
        </section>
        <section className={styles['third-main']}>
          <section className={styles['third-main-content']}>
            <section id="third-main-text">
              <p className={styles['main-index']}>{TODO_MAIN.index}</p>
              <TitleDesc
                title={TODO_MAIN.title}
                desc={TODO_MAIN.desc}
                sort="left"
              />
            </section>
            <Image
              src={thumbnail}
              alt="임시 이미지"
              className={styles['third-main-image']}
            />
          </section>
        </section>
        <section className={styles['fourth-main']}>
          <Image
            src={thumbnail}
            alt="임시 이미지"
            className={styles['fourth-main-image']}
          />
          <Image
            src={thumbnail}
            alt="임시 서브 이미지"
            className={styles['fourth-main-sub-image']}
          />
          <section className={styles['fourth-main-text']}>
            <p className={styles['main-index']}>{RETROSPECT_MAIN.index}</p>
            <TitleDesc
              title={RETROSPECT_MAIN.title}
              desc={RETROSPECT_MAIN.desc}
              sort="left"
            />
          </section>
        </section>
      </main>
    </Fragment>
  );
}
