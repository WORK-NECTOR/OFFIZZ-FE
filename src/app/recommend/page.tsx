'use client';

import Image from 'next/image';
import ic_search from 'public/search.png';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import TitleDesc from '@/components/TitleDesc';
import { RECOMMEND_TEXT } from '@/constants/recommend';
import { regionArr } from '@/constants/office';
import SelectButton from '@/components/Button/SelectButton';
import useRegionStore, { Region } from '@/store/useRegionStore';
import { useAllRecRegionOfficeQuery } from '@/services/office/useRecRegionOfficeQuery';
import OfficeAccordion from '@/components/OfficeAccordion';
import PaginationBar from '@/components/PaginationBar';

function RecommendPage() {
  const [searchInput, setSearchInput] = useState('');
  const [recPage, setRecPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const { selectedRegion, setSelectedRegion } = useRegionStore();
  const { data: recData } = useAllRecRegionOfficeQuery({
    region: selectedRegion,
    page: recPage,
    size: 8,
  });

  useEffect(() => {
    setRecPage(1);
  }, [selectedRegion]);

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText as Region;
    setSelectedRegion(text);
  };

  return (
    <main className={styles['recommend-main']}>
      <Header />
      <section className={styles['search-section']}>
        <TitleDesc
          title={RECOMMEND_TEXT.searchTitle}
          desc={RECOMMEND_TEXT.searchDesc}
          sort="center"
        />
        <div className={styles['search-bar']}>
          <Image
            src={ic_search}
            alt="검색 아이콘"
            className={styles['ic-search']}
          />
          <input
            type="text"
            className={styles['search-input']}
            placeholder={RECOMMEND_TEXT.searchPlaceholder}
          />
        </div>
      </section>
      <section className={styles['result-section']}>
        {!searchInput && (
          <div className={styles['recommend-result-container']}>
            <h2>{RECOMMEND_TEXT.contentTitle}</h2>
            <ul className={styles['recommend-btn-list']}>
              {regionArr.map((item) => (
                <li key={item.id}>
                  <SelectButton
                    selected={selectedRegion === item.region}
                    btnText={item.region}
                    btnHeight="2.5rem"
                    clickHandler={clickHandler}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {recData && recData.recOffices.length > 0 && (
          <div className={styles['recommend-result-container']}>
            {recData.recOffices.map((el) => (
              <OfficeAccordion
                placeName={el.name}
                placeAddress={el.address}
                allYearRound={el.facilities.openAllYear}
                dayAndNight={el.facilities.twentyFourHoursOperation}
                price={el.price}
                priceUnit={el.priceType}
                key={el.officeId}
                officeId={el.officeId}
              />
            ))}
          </div>
        )}
        {recData && recData.totalPage > 0 && (
          <PaginationBar
            totalPage={recData.totalPage}
            curPage={recPage}
            setPage={setRecPage}
          />
        )}
      </section>
      <Footer />
    </main>
  );
}

export default RecommendPage;
