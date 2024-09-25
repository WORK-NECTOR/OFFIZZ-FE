import ProgressBar from '@/components/Bar/ProgressBar';
import { WorkplaceContainer, BtnContainer } from './OnboardingWorkplace.styled';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC, WORKPLACE_KIND } from '@/constants/onboarding';
import useOnboardingStore from '@/store/useOnboardingStore';
import MultiSelectList from '@/components/List/MultiSelectList';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';

function OnboardingWorkplace() {
  const { incrementStep, decrementStep } = useStepstore();
  const { workplace, setWorkplace } = useOnboardingStore();

  return (
    <WorkplaceContainer>
      <ProgressBar width="41.25rem" current={6} total={8} />
      <TitleDesc
        title={ONBOARDING_DESC.workplaceTitle}
        desc={ONBOARDING_DESC.workplaceDesc}
        sort="left"
        titleSize="1.5rem"
        descSize="0.875rem"
      />
      <MultiSelectList listArr={WORKPLACE_KIND} selectFunc={setWorkplace} />
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={
            workplace.length > 0 ? 'var(--blue-main)' : 'var(--black-50)'
          }
          textColor={
            workplace.length > 0 ? 'var(--white-main)' : 'var(--black-300)'
          }
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={workplace.length > 0 ? incrementStep : () => {}}
        />
      </BtnContainer>
    </WorkplaceContainer>
  );
}

export default OnboardingWorkplace;
