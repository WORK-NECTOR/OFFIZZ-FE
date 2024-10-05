'use client';

import Image from 'next/image';
import React from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import leftarrow from '../../../../public/leftarrow.png';
import rightarrow from '../../../../public/rightarrow.png';

function RecapPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.backgroundSwitch}>
        <div className={styles.topSwitch}>
          <div className={styles.daySwitch}>
            <Image src={leftarrow} alt="arrow" width={40} height={40} />
            day 1
            <Image src={rightarrow} alt="arrow" width={40} height={40} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={styles.recapWrapper} />
        </div>
      </div>
    </div>
  );
}

export default RecapPage;
