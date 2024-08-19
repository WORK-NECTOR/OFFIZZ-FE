import React from 'react';
import { HighlightedText, NormalText } from './MainMsg.styled';

interface MainMsgProps {
  activity: string;
  name: string;
  space: string;
}

const MainMsg: React.FC<MainMsgProps> = ({ activity, name, space }) => (
    <div style={{ marginLeft: '3.1rem' }}>
      <NormalText>{activity}을 즐기는 </NormalText>
      <HighlightedText>{name}</HighlightedText>
      <NormalText>
        님을 위한
        <br />
      </NormalText>
      <HighlightedText>{space}</HighlightedText>
      <NormalText> 추천</NormalText>
    </div>
  );

export default MainMsg;
