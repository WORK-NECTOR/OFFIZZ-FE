import React from 'react';
import Image from 'next/image';
import {
  InFoBoxContent,
  InfoImage,
  InfoDesc,
  Info,
  InfoDescP,
} from './InFoBox.styled';
import heart from '../../../public/heart.png';
import { InfoBoxProps } from '@/types/quration.type';

function InFoBox({ title, address }: InfoBoxProps) {
  return (
    <InFoBoxContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <InfoImage />
        <Info>
          <InfoDesc>{title}</InfoDesc>
          <InfoDescP>{address}</InfoDescP>
        </Info>
      </div>
      <Image
        src={heart}
        alt="heart"
        width={20}
        height={20}
        style={{ marginTop: '0.81rem' }}
      />
    </InFoBoxContent>
  );
}

export default InFoBox;
