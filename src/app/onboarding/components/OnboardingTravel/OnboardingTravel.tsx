import ProgressBar from '@/components/Bar/ProgressBar';
import { TravleContainer, BtnContainer } from './OnboardingTravel.styled';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC, TRAVLE_KIND } from '@/constants/onboarding';
import MultiSelectList from '@/components/List/MultiSelectList';
import useOnboardingStore from '@/store/useOnboardingStore';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';

function OnboardingTravel() {
  const { incrementStep, decrementStep } = useStepstore();
  const { travel, setTravel } = useOnboardingStore();

  return (
    <TravleContainer>
      <ProgressBar width="41.25rem" current={5} total={8} />
      <TitleDesc
        title={ONBOARDING_DESC.travleTitle}
        desc={ONBOARDING_DESC.travleDesc}
        sort="left"
        titleSize="1.5rem"
        descSize="0.875rem"
      />
      <MultiSelectList listArr={TRAVLE_KIND} selectFunc={setTravel} />
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={travel.length > 0 ? 'var(--blue-main)' : 'var(--black-50)'}
          textColor={
            travel.length > 0 ? 'var(--white-main)' : 'var(--black-300)'
          }
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={travel.length > 0 ? incrementStep : () => {}}
        />
      </BtnContainer>
    </TravleContainer>
  );
}

export default OnboardingTravel;
