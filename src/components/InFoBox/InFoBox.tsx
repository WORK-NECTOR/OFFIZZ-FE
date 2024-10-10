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
import workHeart from '../../../public/w-like.png';
import vacHeart from '../../../public/v-like.png';
import { InfoBoxProps } from '@/types/quration.type';
import useSelectToggleStore from '@/store/useSelectToggleStore';

function InFoBox({ title, address, image, like }: InfoBoxProps) {
  const { activeToggle } = useSelectToggleStore();
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
        {image ? (
          // eslint-disable-next-line
          <img
            src={image}
            alt="image"
            width={80}
            height={80}
            style={{ borderRadius: '0.5rem' }}
          />
        ) : (
          <InfoImage />
        )}
        <Info>
          <InfoDesc>{title}</InfoDesc>
          <InfoDescP>{address}</InfoDescP>
        </Info>
      </div>
      {like ? (
        <Image
          src={activeToggle === 'work' ? workHeart : vacHeart}
          alt="heart"
          width={20}
          height={20}
          style={{ marginTop: '0.81rem' }}
        />
      ) : (
        <Image
          src={heart}
          alt="heart"
          width={20}
          height={20}
          style={{ marginTop: '0.81rem' }}
        />
      )}
    </InFoBoxContent>
  );
}

export default InFoBox;
