'use client';

import React from 'react';
import styles from './page.module.css';
import Tab from '@/components/Tab/Tab';
import InFoBox from '@/components/InFoBox/InFoBox';
import MainMsg from './components/MainMsg/MainMsg';

function QurationPage() {
  const activity = '영화';
  const name = '홍길동';
  const space = '공간';
  const nowLocation = '경기도 광명시';
  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div>
        <div className={styles.QurationContent}>
          <MainMsg activity={activity} name={name} space={space} />
          <div className={styles.nowLocation}>
            <div className={styles['now-title']}>현재위치</div>
            <div>
              <div className={styles['now-desc']}>{nowLocation}</div>
              <div className={styles['now-suggest']}>
                현재 위치가 아니신가요?
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Search}>
          <input className={styles.SearchInput} />
          <div className={styles.SearchBtn}>검색</div>
        </div>
        <InFoBox />
      </div>
      <div className={styles.MapView} />
    </div>
  );
}

export default QurationPage;
