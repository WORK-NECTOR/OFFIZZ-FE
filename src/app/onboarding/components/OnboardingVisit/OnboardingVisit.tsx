import ProgressBar from '@/components/Bar/ProgressBar';
import {
  RemovableBadge,
  RemovableBadgeContainer,
  VisitContainer,
  BtnContainer,
} from './OnboardingVisit.styled';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import SearchBar from '@/components/Bar/SearchBar';
import useOnboardingStore from '@/store/useOnboardingStore';
import { useEffect } from 'react';
import Image from 'next/image';
import ic_x from '../../../../../public/ic-x.png';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';

function OnboardingVisit() {
  const { incrementStep, decrementStep } = useStepstore();
  const { visitPlace, setVisitPlace } = useOnboardingStore();

  const removePlace = (index: number) => {
    setVisitPlace(visitPlace.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    console.log(visitPlace);
  }, [visitPlace]);

  return (
    <VisitContainer>
      <ProgressBar width="41.25rem" current={7} total={8} />
      <TitleDesc
        title={ONBOARDING_DESC.visitTitle}
        desc={ONBOARDING_DESC.visitDesc}
        sort="left"
        titleSize="1.5rem"
        descSize="0.875rem"
      />
      <SearchBar
        width="41.25rem"
        height="2.75rem"
        placeholder={ONBOARDING_DESC.visitPlaceholder}
        searchBarType="visit"
      />
      <RemovableBadgeContainer>
        {visitPlace.length > 0 &&
          visitPlace.map((el, idx) => (
            <RemovableBadge key={idx}>
              <p className="badge-place">{el.place_name}</p>
              <Image
                src={ic_x}
                alt="X 버튼"
                className="badge-img"
                onClick={() => {
                  removePlace(idx);
                }}
              />
            </RemovableBadge>
          ))}
      </RemovableBadgeContainer>
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={
            visitPlace.length > 0 ? 'var(--blue-main)' : 'var(--black-50)'
          }
          textColor={
            visitPlace.length > 0 ? 'var(--white-main)' : 'var(--black-300)'
          }
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={visitPlace.length > 0 ? incrementStep : () => {}}
        />
        <button id="skip-btn" onClick={incrementStep}>
          {ONBOARDING_DESC.skipBtn}
        </button>
      </BtnContainer>
    </VisitContainer>
  );
}

export default OnboardingVisit;
