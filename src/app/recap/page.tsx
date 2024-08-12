'use client';

import React from 'react';
import Header from '@/components/Header';
import RecapBox from '@/components/RecapBox/RecapBox';
import styles from './page.module.css';
import { TOP_RECAP } from '@/constants/recap';
import TitleDesc from '@/components/TitleDesc';
import recapImg1 from '../../../public/recapimg.png'
import recapImg2 from '../../../public/recapimg2.png'
function RecapPage() {
  return (
    <>
      <Header />
      <div className={styles['recap-wrapper']}>
        <div className={styles['recap-title-wrapper']}>
          <TitleDesc sort='left' title={TOP_RECAP.title} desc={TOP_RECAP.desc} />
        </div>
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
      </div>
    </>
  );
}

export default RecapPage;
