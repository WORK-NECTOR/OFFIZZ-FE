import React from 'react';
import Image from 'next/image';
import {
  InFoBoxContent,InfoImage,InfoDesc
} from './InFoBox.styled';
import heart from '../../../public/heart.png';

function InFoBox() {
  return (
    <InFoBoxContent>
      <div style={{display:'flex'}}>
      <InfoImage></InfoImage>
      <InfoDesc>
        <h2>피츠케이크</h2>
        <p>강원도 강릉시 강릉대로 31</p>
      </InfoDesc>
      </div>
      <Image src={heart} alt='heart' width={45} height={45} style={{marginTop:'2.5rem'}}/>
    </InFoBoxContent>
  );
}

export default InFoBox;
