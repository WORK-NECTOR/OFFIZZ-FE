'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import TitleDesc from '@/components/TitleDesc';
import { RECOMMEND_TEXT } from '@/constants/recommend';
import Image from 'next/image';
import ic_search from 'public/search.png';

function RecommendPage() {
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
          <input type="text" className={styles['search-input']} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default RecommendPage;
