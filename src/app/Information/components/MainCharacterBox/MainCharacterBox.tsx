import React from 'react'
import { MCsub, MCtitle, MCtitlesub, MaincharBox } from './MainCharacterBox.styled';
 

function MainCharacterBox() {
  return (
    <MaincharBox>
      <div style={{display:'flex'}}>
      <MCtitle>대문자 J</MCtitle>
      <MCtitlesub> 성현 님, 안녕하세요!</MCtitlesub>
      </div>
      <MCsub>일할 땐 일하고, 놀 땐 놀아야 해요</MCsub>
    </MaincharBox>
  )
}

export default MainCharacterBox;