import React from 'react';
import Image from 'next/image';
import { InFoBoxContent, InfoImage, InfoDesc } from './InFoBox.styled';
import heart from '../../../public/heart.png';
import { InfoBoxProps } from '@/types/quration.type';

function InFoBox({ title, address }: InfoBoxProps) {
  return (
    <InFoBoxContent>
      <div style={{ display: 'flex' }}>
        <InfoImage />
        <InfoDesc>
          <h2>{title}</h2>
          <p>{address}</p>
        </InfoDesc>
      </div>
      <Image
        src={heart}
        alt="heart"
        width={45}
        height={45}
        style={{ marginTop: '2.5rem' }}
      />
    </InFoBoxContent>
  );
}

export default InFoBox;
