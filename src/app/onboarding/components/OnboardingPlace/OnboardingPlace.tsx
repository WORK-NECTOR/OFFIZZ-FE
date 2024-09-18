import ProgressBar from '@/components/Bar/ProgressBar';
import { PlaceContainer } from './OnboardingPlace.styled';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import SearchBar from '@/components/Bar/SearchBar';

function OnboardingPlace() {
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
    </PlaceContainer>
  );
}

export default OnboardingPlace;
