'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import thumbnail from '../../public/thumbnail.png';
import TitleDesc from '@/components/TitleDesc';
import {
  DASHBOARD_MAIN,
  RECOMMEND_MAIN,
  RETROSPECT_MAIN,
  TODO_MAIN,
  TOP_MAIN,
} from '@/constants/main';
import BasicButton from '@/components/Button/BasicButton';
import styles from './page.module.css';
import { regionArr } from '@/constants/office';
import SelectButton from '@/components/Button/SelectButton';
import useRegionStore, { Region } from '@/store/useRegionStore';
import { useRecRegionOfficeQuery } from '@/services/office/useRecRegionOfficeQuery';
import { useEffect } from 'react';

export default function MainPage() {
  const { selectedRegion, setSelectedRegion } = useRegionStore((state) => ({
    selectedRegion: state.selectedRegion,
    setSelectedRegion: state.setSelectedRegion,
  }));

  const { data, status } = useRecRegionOfficeQuery({
    region: '서울',
    size: 4,
  });

  useEffect(() => {
    console.log(data);
  }, [status]);

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText as Region;
    setSelectedRegion(text);
  };

  return (
    <>
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
            <BasicButton
              btnHeight="2.75rem"
              btnText={TOP_MAIN.start}
              btnType="full"
              btnColor="var(--blue-main)"
              textColor="var(--white-main)"
              hoverColor="var(--blue-dark)"
              padding="1rem 2rem"
              clickHandler={() => {}}
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
        <section className={styles['fifth-main']} />
        <section className={styles['sixth-main']}>
          <TitleDesc
            title={RECOMMEND_MAIN.title}
            desc={RECOMMEND_MAIN.desc}
            sort="left"
          />
          <div className={styles['sixth-select-bar']}>
            <ul className={styles['sixth-btn-list']}>
              {regionArr.map((item) => (
                <li key={item.id} className={styles['sixth-btn-li']}>
                  <SelectButton
                    selected={selectedRegion === item.region}
                    btnText={item.region}
                    btnHeight="2.5rem"
                    clickHandler={clickHandler}
                  />
                </li>
              ))}
            </ul>
            <BasicButton
              btnText={RECOMMEND_MAIN.viewAllBtnText}
              btnType="empty"
              btnHeight="2.75rem"
              textColor="var(--blue-main)"
              hoverColor="var(--blue-greyish)"
              padding="0.5rem 1rem"
              clickHandler={() => {}}
            />
          </div>
        </section>
      </main>
    </>
  );
}
