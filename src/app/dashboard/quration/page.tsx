'use client';
import Tab from '@/components/Tab/Tab'
import React from 'react'
import styled from 'styled-components';
import styles from './page.module.css';
import Image from 'next/image';
import heart from '../../../../public/heart.png'
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
  const PlaceMainBox = () => {
    return (
      <PlaceMainContent>
        <div style={{marginLeft:'2.81rem',display:'flex',marginTop:'17rem',justifyContent:'space-between'}}>
        <div>
        <PMMainTitle>피츠케이크</PMMainTitle>
        <PMMainSub>강원도 강릉시 강릉대로 31</PMMainSub>
        <PMMainSub>강원도 강릉시 강릉대로 31</PMMainSub>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Image src={heart} alt='좋아요' width={50} height={46}/>
            <PMImagesub>가보고싶어요!</PMImagesub>
        </div>
        </div>
      </PlaceMainContent>
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
        <div style={{display:'flex',justifyContent:'space-between',margin:'1.5rem 3rem 0'}}>
        <PlaceMainBox />
        <PlaceMainBox />
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
const PlaceMainContent = styled.div`
width: 31rem;
height: 25.5625rem;
flex-shrink: 0;
border-radius: 1rem;
background: #E5E5E5;
padding-right: 2.44rem;
`;
const PMMainTitle = styled.div`
color: var(--Greyscale-Black, #000);
font-family: Inter;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const PMMainSub = styled.div`
color: var(--Greyscale-Black, #000);
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.87rem;
`;
const PMImagesub = styled.div`
margin-top: 1rem;
color: var(--Greyscale-Black, #000);
text-align: center;
font-family: SUIT;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
