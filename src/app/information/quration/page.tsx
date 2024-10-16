'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap/KakaoMap';
import useKakaoLoader from '@/components/KakaoMap/use-kakao-loader';
import Tab from '@/components/Tab/Tab';
import { useSearchOfficesQuery } from '@/services/office/useSearchOfficeQuery';
import styles from './page.module.css';
import InFoBox from '@/components/InFoBox';
import useUserLocationStore from '@/store/userLocation';
import MainMsg from './components/MainMsg/MainMsg';
import useDebounce from '@/hook/useDebounce';
import QurationCategory from './components/Category';
import search from '../../../../public/search.png';
import useCategoryStore from '@/store/useCategoryStore';
import useSelectToggleStore from '@/store/useSelectToggleStore';

function QurationPage() {
  useKakaoLoader();

  const [searchString, setSearchString] = useState<string>('');
  const [clickPage, setClickPage] = useState<number>(1);
  const { activeCategory } = useCategoryStore();
  const { userLat } = useUserLocationStore();
  const { userLng } = useUserLocationStore();
  const { activeToggle, setToggleTab } = useSelectToggleStore();
  const debouncedSearchText = useDebounce(searchString, 500); // 검색클릭 값
  const { data, isLoading, error } = useSearchOfficesQuery({
    searchText: debouncedSearchText,
    clickPage,
    activeCategory,
    userLat,
    userLng,
    activeToggle,
  });

  const { userAddress } = useUserLocationStore((state) => ({
    userAddress: state.userAddress,
  }));
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const activity = '카공';
  const name = '성현';
  const space = '공간';
  const nowLocation = userAddress || '위치를 가져오는 중...';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchString((e.target as HTMLInputElement).value);
    }
  };
  const onClickWork = () => {
    setToggleTab('work');
  };
  const onClickVacation = () => {
    setToggleTab('vacation');
  };
  // eslint-disable-next-line
  const handlePageClick = (clickPage: number) => {
    setClickPage(clickPage);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div>
        <div className={styles.switchWrapper}>
          {activeToggle === 'work' && (
            <div className={styles.switch}>
              <div
                className={styles.work}
                onClick={onClickWork}
                aria-hidden="true"
              >
                work
              </div>
              <div
                className={styles.vacation}
                onClick={onClickVacation}
                aria-hidden="true"
              >
                vacation
              </div>
            </div>
          )}
          {activeToggle === 'vacation' && (
            <div className={styles.switchSwitch}>
              <div
                className={styles.workSwitch}
                onClick={onClickWork}
                aria-hidden="true"
              >
                work
              </div>
              <div
                className={styles.vacationSwitch}
                onClick={onClickVacation}
                aria-hidden="true"
              >
                vacation
              </div>
            </div>
          )}
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '22.75rem' }}>
            <div className={styles.Search}>
              <Image src={search} alt="search" width={20} height={20} />
              <input
                className={styles.SearchInput}
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className={styles.QurationContent}>
              <div className={styles.nowLocation}>
                <div className={styles['now-title']}>현재위치</div>
                <div>
                  <div className={styles['now-desc']}>{nowLocation}</div>
                </div>
              </div>
              <MainMsg activity={activity} name={name} space={space} />
            </div>
            <div className={styles.Category}>
              <QurationCategory />
            </div>
            <div className={styles.officeList}>
              {isLoading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {!isLoading &&
                !error &&
                data?.serchData.length &&
                data.serchData.map((office) => (
                  <div key={office.id} className={styles.officeItem}>
                    <InFoBox
                      title={office.name}
                      address={office.address}
                      image={office.image}
                      like={office.isLike}
                    />
                  </div>
                ))}
            </div>
            <div className={styles.pagenation}>
              {pages.map((page) => (
                <button
                  type="button"
                  key={page}
                  className={styles.pageButton}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.MapView}>
              <KakaoMap markerData={data?.serchData || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QurationPage;
