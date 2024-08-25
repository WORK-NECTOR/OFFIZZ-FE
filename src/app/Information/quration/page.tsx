'use client';

import React, { useState } from 'react';
import KakaoMap from '@/components/KakaoMap/KakaoMap';
import useKakaoLoader from '@/components/KakaoMap/use-kakao-loader';
import Tab from '@/components/Tab/Tab';
import { useSearchOfficesQuery } from '@/services/office/useSearchOfficeQuery';
import MainMsg from './components/MainMsg/MainMsg';
import styles from './page.module.css';
import InFoBox from '@/components/InFoBox';
import useUserLocationStore from '@/store/userLocation';

function QurationPage() {
  useKakaoLoader();

  const [searchString, setSearchString] = useState<string>(''); // 검색하기 위한 입력값
  const [searchText, setSearchText] = useState<string>(''); // 검색클릭 값
  const { data, isLoading, error } = useSearchOfficesQuery({ searchText });
  const { userAddress } = useUserLocationStore((state) => ({
    userAddress: state.userAddress,
  }));

  const activity = '영화';
  const name = '홍길동';
  const space = '공간';
  const nowLocation = userAddress || '위치를 가져오는 중...';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchText(searchString);
    }
  };

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
          <input
            className={styles.SearchInput}
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={styles.officeList}>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!isLoading &&
            !error &&
            data?.offices.length &&
            data.offices.map((office) => (
              <div key={office.officeId} className={styles.officeItem}>
                <InFoBox title={office.name} address={office.address} />
              </div>
            ))}
        </div>
      </div>
      <div className={styles.MapView}>
        <KakaoMap />
      </div>
    </div>
  );
}

export default QurationPage;
