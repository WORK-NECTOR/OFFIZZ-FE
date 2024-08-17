import React from 'react';
import Image from 'next/image';
import {
  DashboardBoxContent,
  DBBox,
  DBDesc,
  DBDImage,
} from './dashboard.styled';
import heart from '../../../public/heart.png';

function DashboardBox() {
  return (
    <DashboardBoxContent>
      <DBBox />
      <div
        style={{
          display: 'flex',
          marginTop: '1.7rem',
          justifyContent: 'space-between',
        }}
      >
        <DBDesc>
          <h3>강문해변</h3>
          <p>작고 고요한 해변 동해안의 정수</p>
          <p>작고 고요한 해변 동해안의 정수</p>
        </DBDesc>
        <DBDImage>
          <Image src={heart} alt="좋아요" width={45} height={45} />
        </DBDImage>
      </div>
    </DashboardBoxContent>
  );
}

export default DashboardBox;
