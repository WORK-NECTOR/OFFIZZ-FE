import React from 'react';
import Image from 'next/image';
import { RecapLayout } from './RecapBox.styled';
import { RecapContentProps } from '@/types/recap.type';
import play from '../../../public/play.png';

function RecapBox({
  name,
  address,
  img,
  startDate,
  endDate,
  workationId,
}: RecapContentProps) {
  return (
    <RecapLayout>
      <div id="recap-info-wrapper">
        <div id="recap-info-main">{name}</div>
        <div style={{ display: 'flex' }}>
          <div>
            <div id="recap-info-sub">
              {address}, {startDate} ~ {endDate}
            </div>
            <Image id="recap-play" src={play} alt="재생 버튼" />
          </div>
          <Image id="recap-img" src={img} alt="리캡 이미지" />
        </div>
      </div>
    </RecapLayout>
  );
}

export default RecapBox;
