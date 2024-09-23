import Image from 'next/image';
import {
  BtnContainer,
  EndContainer,
  EndTextWrapper,
} from './OnboardingEnd.styled';
import end_character from '../../../../../public/onboarding-end-character.png';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import BasicButton from '@/components/Button/BasicButton';
import useStepstore from '@/store/useStepStore';
import BackButton from '@/components/Button/BackButton';

function OnboardingEnd() {
  const { decrementStep } = useStepstore();

  return (
    <EndContainer>
      <Image src={end_character} alt="온보딩 끝 캐릭터" />
      <EndTextWrapper>
        <TitleDesc
          title={ONBOARDING_DESC.endTitle}
          desc={ONBOARDING_DESC.endDesc}
          sort="left"
          titleSize="2.5rem"
          descSize="1rem"
        />
        <BtnContainer>
          <BackButton clickHandler={decrementStep} />
          <BasicButton
            btnText={ONBOARDING_DESC.nextBtn}
            btnType="full"
            btnColor="var(--blue-main)"
            textColor="var(--white-main)"
            btnHeight="2.5rem"
            padding="0.5rem 1rem"
            fontSize="1rem"
            clickHandler={() => {}} // 추후 api 연결 및 링크 이동
          />
        </BtnContainer>
      </EndTextWrapper>
    </EndContainer>
  );
}

export default OnboardingEnd;
