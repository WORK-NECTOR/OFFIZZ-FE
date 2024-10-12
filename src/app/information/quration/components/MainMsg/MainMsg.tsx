import React from 'react';
import { HighlightedText, NormalText, BoldText } from './MainMsg.styled';
import useCategoryStore from '@/store/useCategoryStore';
import useSelectToggleStore from '@/store/useSelectToggleStore';

interface MainMsgProps {
  activity: string;
  name: string;
  space: string;
}

function MainMsg({ activity, name, space }: MainMsgProps) {
  const { activeCategoryString } = useCategoryStore();
  const { activeToggle } = useSelectToggleStore();
  return (
    <div style={{ marginLeft: '1.5rem' }}>
      {activeToggle === 'work' && (
        <NormalText>
          워케이션 기간 몰입을 도와줄
          <br />
        </NormalText>
      )}
      {activeToggle === 'vacation' && (
        <NormalText>
          워케이션 기간 푹 쉬어갈 수 있는
          <br />
        </NormalText>
      )}
      <HighlightedText>{activeCategoryString}</HighlightedText>
      <BoldText> 추천</BoldText>
    </div>
  );
}

export default MainMsg;
