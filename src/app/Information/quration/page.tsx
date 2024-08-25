'use client';

import React from 'react';
import styles from './page.module.css';
import Tab from '@/components/Tab/Tab';
import InFoBox from '@/components/InFoBox/InFoBox';
import MainMsg from './components/MainMsg/MainMsg';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/KakaoMap/use-kakao-loader';

function QurationPage() {
  useKakaoLoader()
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
      <div className={styles.MapView}>
      <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    />
      </div>
    </div>
  );
}

export default QurationPage;
