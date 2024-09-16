import Image from 'next/image';
import { StyledBackBtn } from './BackButton.styled';
import arrow from '../../../../public/down-arrow.png';

function BackButton(clickHandler: () => void) {
  return (
    <StyledBackBtn onClick={clickHandler}>
      <Image id="back-arrow" src={arrow} alt="뒤로가기 아이콘" />
    </StyledBackBtn>
  );
}

export default BackButton;
