'use client';

import React from 'react';
import Header from '@/components/Header';
import RecapBox from '@/components/RecapBox/RecapBox';
import styles from './page.module.css';
import { TOP_RECAP } from '@/constants/recap';
import TitleDesc from '@/components/TitleDesc';
import recapImg1 from '../../../public/recapimg.png';
import recapImg2 from '../../../public/recapimg2.png';

function NonRecapDataBox() {
  return (
    <div className={styles['non-recap-wrapper']}>
      <div className={styles['non-recap-title']}>
        아직 Recap 기록이 없어요.
        <br />
        오피츠와 함께 워케이션을 1회 이상 마치면 Recap을 볼 수 있어요.
      </div>
    </div>
  );
}
function RecapPage() {
  // 리캡 데이터 조회
  const recapData = true;
  return (
    <>
      <Header />
      <div className={styles['recap-wrapper']}>
        <div className={styles['recap-title-wrapper']}>
          <TitleDesc
            type="recap"
            sort="left"
            title={TOP_RECAP.title}
            desc={TOP_RECAP.desc}
          />
        </div>
        {!recapData && <NonRecapDataBox />}
        {recapData && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <RecapBox
              mainText="데스커 부산"
              subText="부산광역시"
              startDate="2024.05.12"
              endDate="2024.05.24"
              img={recapImg1}
            />
            <RecapBox
              mainText="데스커 부산"
              subText="부산광역시"
              startDate="2024.05.12"
              endDate="2024.05.24"
              img={recapImg2}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default RecapPage;
