'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import thumbnail from '../../public/thumbnail.png';
import main_dashboard from 'public/main-dashboard.png';
import main_todo from 'public/main-todo.png';
import main_retro from 'public/main-retrospective.png';
import main_ywt from 'public/main-ywt.png';
import main_recap from 'public/main-recap.png';
import TitleDesc from '@/components/TitleDesc';
import {
  DASHBOARD_MAIN,
  RECAP_MAIN,
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
import FeatureInfo from '@/components/FeatureInfo';
// import useUserStore from '@/store/useUserStore';

export default function MainPage() {
  // const { accessToken, setAccessToken } = useUserStore.getState();
  const { selectedRegion, setSelectedRegion } = useRegionStore();

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
              src={main_dashboard}
              alt="메인 - 대시보드"
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
              src={main_todo}
              alt="메인 - 투두"
              className={styles['third-main-image']}
            />
          </section>
        </section>
        <section className={styles['fourth-main']}>
          <Image
            src={main_retro}
            alt="메인 - 회고"
            className={styles['fourth-main-image']}
          />
          <Image
            src={main_ywt}
            alt="메인 - YWT 회고"
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
        <section className={styles['fifth-main']}>
          <section className={styles['fifth-main-text']}>
            <p className={styles['main-index']}>{RECAP_MAIN.index}</p>
            <TitleDesc
              title={RECAP_MAIN.title}
              desc={RECAP_MAIN.desc}
              sort="center"
            />
          </section>
          <section className={styles['fifth-main-content']}>
            <Image
              src={main_recap}
              alt="리캡 이미지"
              className={styles['fifth-main-img']}
            />
            <div className={styles['fifth-features']}>
              <FeatureInfo
                title={RECAP_MAIN.goalTitle}
                desc={RECAP_MAIN.goalDesc}
              />
              <FeatureInfo
                title={RECAP_MAIN.statisticTitle}
                desc={RECAP_MAIN.statisticDesc}
              />
              <FeatureInfo
                title={RECAP_MAIN.achievementTitle}
                desc={RECAP_MAIN.achievementDesc}
              />
            </div>
          </section>
        </section>
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
