import Image from 'next/image';
import arrow from 'public/down-arrow.png';
import { BackBtn, BackNextBtnContainer, NextBtn } from './BackNextBtn.styled';
import useStepstore from '@/store/useStepStore';

function BackNextBtn({ color = 'var(--blue-main)' }: { color?: string }) {
  const { decrementStep, incrementStep } = useStepstore();

  return (
    <BackNextBtnContainer>
      <BackBtn onClick={decrementStep}>
        <Image id="arrow-img" src={arrow} alt="화살표 이미지" />
      </BackBtn>
      <NextBtn $color={color || ''} onClick={incrementStep}>{`다음 >`}</NextBtn>
    </BackNextBtnContainer>
  );
}

export default BackNextBtn;
