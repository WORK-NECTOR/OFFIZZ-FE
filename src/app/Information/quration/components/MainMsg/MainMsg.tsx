import React from 'react';
import { HighlightedText, NormalText ,BoldText} from './MainMsg.styled';

interface MainMsgProps {
  activity: string;
  name: string;
  space: string;
}

// Function Declaration
function MainMsg({ activity, name, space }: MainMsgProps) {
  return (
    <div style={{ marginLeft: '1.5rem' }}>
      <NormalText>{activity}을 즐기는 </NormalText>
      <HighlightedText>{name}</HighlightedText>
      <NormalText>
        님을 위한
        <br />
      </NormalText>
      <HighlightedText>{space}</HighlightedText>
      <BoldText> 추천</BoldText>
    </div>
  );
}

export default MainMsg;
