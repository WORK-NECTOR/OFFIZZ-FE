'use client';

import React from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import MainCharacterBox from './components/MainCharacterBox';
import Recommend from './components/Recommend';
import TimeRange from '@/components/TimeRange';
import { TimeRangeType } from '@/types/timeRange.type';
import Todo from './components/Todo';

function InformationPage() {

  const timeArr: TimeRangeType[] = [
    {
      from: '11:30',
      to: '15:30',
      activity: 'Core Time',
      icon: '😎', 
    },
    {
      from: '16:00',
      to: '17:15',
      activity: 'Test',
      icon: '😂',
    },
  ];

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
            <div>
            <div className={styles.rightTitle}>근무 시간표</div>
            <TimeRange timeArr={timeArr}/>
            </div>
            <div>
            <div className={styles.rightTitle}>
              <>to-do</>
            <div className={styles.addBtn}>추가 +</div>
              </div>
              <Todo timeArr={timeArr}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
