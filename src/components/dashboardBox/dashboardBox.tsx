import React from 'react';
import { DashboardBoxContent, DBBox } from './dashboard.styled';
import Image from 'next/image';
import heart from '../../../public/heart.png'
function DashboardBox() {
  return (
    <DashboardBoxContent>
      <DBBox />
      <div style={{display:'flex',marginTop:'1.7rem'}}>
        <div>
            <h3>강문해변</h3>
            <p>작고 고요한 해변 동해안의 정수</p>
            <p>작고 고요한 해변 동해안의 정수</p>
        </div>
        <div>
            <Image src={heart} alt='좋아요' width={45} height={45}/>
        </div>
      </div>
    </DashboardBoxContent>
  );
}

export default DashboardBox;
