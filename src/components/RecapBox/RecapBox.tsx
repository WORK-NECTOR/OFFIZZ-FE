import React from 'react';
import Image from 'next/image';
import { RecapLayout } from './RecapBox.styled';
import { RecapContentProps } from '@/types/recap.type';

function RecapBox(props: RecapContentProps) {
  return (
    <RecapLayout>
      <div id="recap-info-wrapper">
        <div id="recap-info-main">{props.mainText}</div>
        <div style={{display:'flex'}}>
        <div id="recap-info-sub">{props.subText}</div>
        <Image id="recap-img" src={props.img} alt='리캡 이미지'></Image>
        </div>
      </div>
    </RecapLayout>
  );
}

export default RecapBox;
