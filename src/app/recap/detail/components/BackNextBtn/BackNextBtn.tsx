import Image from 'next/image';
import arrow from 'public/down-arrow.png';
import { BackBtn, BackNextBtnContainer, NextBtn } from './BackNextBtn.styled';
import useStepstore from '@/store/useStepStore';

// eslint-disable-next-line react/require-default-props
function BackNextBtn(props: { color?: string }) {
  const { color = 'var(--blue-main)' } = props;
  const { decrementStep, incrementStep } = useStepstore();

  return (
    <BackNextBtnContainer>
      <BackBtn onClick={decrementStep}>
        <Image id="arrow-img" src={arrow} alt="화살표 이미지" />
      </BackBtn>
      <NextBtn $color={color} onClick={incrementStep}>{`다음 >`}</NextBtn>
    </BackNextBtnContainer>
  );
}

export default BackNextBtn;
