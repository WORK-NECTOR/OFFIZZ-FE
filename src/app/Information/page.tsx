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
        <div className={styles.Top}>
          <div className={styles.Day}>day1</div>
          <div className={styles.Switch}>SwitchBtn</div>
        </div>
        <div>
          <MainCharacterBox />
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
