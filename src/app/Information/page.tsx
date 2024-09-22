'use client';

import React from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import MainCharacterBox from './components/MainCharacterBox';

function InformationPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div style={{ border: '1px solid red', width: '100%' }}>
        <div className={styles.top}>
          <div className={styles.day}>day1</div>
          <div className={styles.switch}>SwitchBtn</div>
        </div>
        <div>
          <MainCharacterBox />
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
