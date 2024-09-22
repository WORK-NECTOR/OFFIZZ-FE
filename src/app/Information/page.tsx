'use client';

import React from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import MainCharacterBox from './components/MainCharacterBox';
import Recommend from './components/Recommend';

function InformationPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.background}>
        <div className={styles.top}>
          <div className={styles.day}>day1</div>
          <div className={styles.switch}>SwitchBtn</div>
        </div>
        <div style={{display:'flex'}}>
        <div className={styles.leftWrapper}>
          <>
          <MainCharacterBox />
          </>
          <>
          <Recommend />
          </>
          </div>
          <div className={styles.rightWrapper}>
            <>
            <div className={styles.timeTable}>근무 시간표</div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
