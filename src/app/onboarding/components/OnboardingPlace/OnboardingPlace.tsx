import ProgressBar from '@/components/Bar/ProgressBar';
import { PlaceContainer, BtnContainer } from './OnboardingPlace.styled';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import SearchBar from '@/components/Bar/SearchBar';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';
import useOnboardingStore from '@/store/useOnboardingStore';

function OnboardingPlace() {
  const { incrementStep, decrementStep } = useStepstore();
  const { place } = useOnboardingStore();

  return (
    <PlaceContainer>
      <ProgressBar width="41.25rem" current={3} total={8} />
      <TitleDesc
        title={ONBOARDING_DESC.placeTitle}
        desc={ONBOARDING_DESC.placeDesc}
        sort="left"
        titleSize="1.5rem"
        descSize="0.875rem"
      />
      <SearchBar
        width="41.25rem"
        height="2.625rem"
        placeholder={ONBOARDING_DESC.placePlaceholder}
      />
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={place ? 'var(--blue-main)' : 'var(--black-50)'}
          textColor={place ? 'var(--white-main)' : 'var(--black-300)'}
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={place ? incrementStep : () => {}}
        />
      </BtnContainer>
    </PlaceContainer>
  );
}

export default OnboardingPlace;
