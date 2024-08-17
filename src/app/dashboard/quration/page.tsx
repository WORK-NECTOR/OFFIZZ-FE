'use client';
import Tab from '@/components/Tab/Tab'
import React from 'react'
import styled from 'styled-components';
import styles from './page.module.css';
const getWelcomeMessage = (activity: string, name: string, space: string) => {
    return (
      <div style={{marginLeft:'3.1rem'}}>
        <NormalText>{activity}을 즐기는 </NormalText>
        <HighlightedText>{name}</HighlightedText>
        <NormalText>님을 위한<br/></NormalText>
        <HighlightedText>{space}</HighlightedText>
        <NormalText> 추천</NormalText>
      </div>
    );
  };
function page() {
const activity = "영화";
  const name = "홍길동";
  const space = "공간";
  const nowLocation='경기도 광명시'
  return (
    <div style={{display:'flex'}}>
      <Tab/>
      <div className={styles.QurationContent}>
        {getWelcomeMessage(activity, name, space)}
        <div className={styles.nowLocation}>
        <div className={styles['now-title']}>현재위치</div>
                    <div className={styles['now-desc']}>{nowLocation}</div>
                    <div className={styles['now-suggest']}>현재 위치가 아니신가요?</div>
        </div>
      </div>
    </div>
  )
}

export default page

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
