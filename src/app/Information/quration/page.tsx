'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from './page.module.css';
import Tab from '@/components/Tab/Tab';
import heart from '../../../../public/heart.png';
import InFoBox from '@/components/InFoBox/InFoBox';

const WelcomeMessage = (activity: string, name: string, space: string) => (
  <div style={{ marginLeft: '3.1rem' }}>
    <NormalText>{activity}을 즐기는 </NormalText>
    <HighlightedText>{name}</HighlightedText>
    <NormalText>
      님을 위한
      <br />
    </NormalText>
    <HighlightedText>{space}</HighlightedText>
    <NormalText> 추천</NormalText>
  </div>
);

function Category() {
  return <CategoryBox>카페</CategoryBox>;
}
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
          {WelcomeMessage(activity, name, space)}
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

const HighlightedText = styled.span`
  color: var(--Greyscale-Black, #000);
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NormalText = styled.span`
  color: var(--Greyscale-Black, #000);
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CategoryBox = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 1.8rem;
  border: 1.2px solid var(--Greyscale-Black, #000);
`;
