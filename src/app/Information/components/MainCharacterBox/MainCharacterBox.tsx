import React from 'react';
import {
  MCsub,
  MCtitlesub,
  MaincharBox,
  ImageWapper,
} from './MainCharacterBox.styled';
import Image from 'next/image';
import charactor from '../../../../../public/charactor-laptop.png'
function MainCharacterBox() {
  return (
    <MaincharBox>
      <div>
        <MCtitlesub>성현님의 플래너</MCtitlesub>
      </div>
      <ImageWapper>
      <Image src={charactor} alt='캐릭터 이미지' width={162} height={162}/>
      </ImageWapper>
      <MCsub>일할 땐 일하고, 놀 땐 놀아야 해요</MCsub>
    </MaincharBox>
  );
}

export default MainCharacterBox;
