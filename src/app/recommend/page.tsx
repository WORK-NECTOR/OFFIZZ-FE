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
import { useSearchWorkOfficesQuery } from '@/services/office/useSearchWorkOfficeQuery';

function RecommendPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchText, setSearchText] = useState('');
  const [recPage, setRecPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const { selectedRegion, setSelectedRegion } = useRegionStore();
  const { data: recData } = useAllRecRegionOfficeQuery({
    region: selectedRegion,
    page: recPage,
    size: 8,
  });
  const { data: searchData } = useSearchWorkOfficesQuery({
    searchText,
    page: searchPage,
    size: 8,
  });

  useEffect(() => {
    setRecPage(1);
  }, [selectedRegion]);

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText as Region;
    setSelectedRegion(text);
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchText(searchInput);
    }
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
            onChange={(e) => {
              setSearchInput(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              activeEnter(e);
            }}
          />
        </div>
      </section>
      <section className={styles['result-section']}>
        {!searchText && (
          <>
            <div className={styles['recommend-header']}>
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
            {recData && (
              <>
                {recData.recOffices.length > 0 && (
                  <div className={styles['result-container']}>
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
                {recData.totalPage > 0 && (
                  <PaginationBar
                    totalPage={recData.totalPage}
                    curPage={recPage}
                    setPage={setRecPage}
                  />
                )}
              </>
            )}
          </>
        )}
        {searchText && (
          <>
            <div className={styles['search-header']}>
              <h2>{RECOMMEND_TEXT.searchResult}</h2>
              <p>{`'${searchText}'에 대한 ${searchData ? searchData.totalPage : '0'} 페이지의 검색 결과`}</p>
            </div>
            {searchData && (
              <>
                {searchData.offices.length > 0 && (
                  <div className={styles['result-container']}>
                    {searchData.offices.map((el) => (
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
                {searchData.totalPage > 0 && (
                  <PaginationBar
                    totalPage={searchData.totalPage}
                    curPage={searchPage}
                    setPage={setSearchPage}
                  />
                )}
              </>
            )}
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default RecommendPage;
