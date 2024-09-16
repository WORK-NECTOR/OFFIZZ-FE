import { StartContainer, StartTextWrapper } from './Onboarding.styled';
import Image from 'next/image';
import start_character from '../../../../../public/onboarding-character.png';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import BasicButton from '@/components/Button/BasicButton';
import useStepstore from '@/store/useStepStore';

function OnboardingStart() {
  const { incrementStep } = useStepstore();

  return (
    <StartContainer>
      <Image src={start_character} alt="온보딩 시작 캐릭터" />
      <StartTextWrapper>
        <TitleDesc
          title={ONBOARDING_DESC.welcomeTitle}
          desc={ONBOARDING_DESC.welcomeDesc}
          sort="left"
          titleSize="2.5rem"
          descSize="1rem"
        />
        <BasicButton
          btnType="full"
          textColor="var(--white-main)"
          btnColor="var(--blue-main)"
          btnText={ONBOARDING_DESC.startBtn}
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={incrementStep}
        />
      </StartTextWrapper>
    </StartContainer>
  );
}

export default OnboardingStart;
