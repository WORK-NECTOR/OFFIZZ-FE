import ProgressBar from '@/components/Bar/ProgressBar';
import { GoalContainer, BtnContainer } from './OnboardingGoal.styled';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import Input from '@/components/Input';
import useOnboardingStore from '@/store/useOnboardingStore';
import useStepstore from '@/store/useStepStore';
import BackButton from '@/components/Button/BackButton';
import BasicButton from '@/components/Button/BasicButton';

function OnboardingGoal() {
  const { incrementStep, decrementStep } = useStepstore();
  const { goal, setGoal } = useOnboardingStore();

  return (
    <GoalContainer>
      <ProgressBar width="41.25rem" current={8} total={8} />
      <h2>{ONBOARDING_DESC.goalTitle}</h2>
      <Input placeholder={ONBOARDING_DESC.goalPlaceholder} setState={setGoal} />
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={goal ? 'var(--blue-main)' : 'var(--black-50)'}
          textColor={goal ? 'var(--white-main)' : 'var(--black-300)'}
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={goal ? incrementStep : () => {}}
        />
      </BtnContainer>
    </GoalContainer>
  );
}

export default OnboardingGoal;
