import ProgressBar from '@/components/Bar/ProgressBar';
import { BtnContainer, ReasonContainer } from './OnboardingReason.styled';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import Input from '@/components/Input';
import useOnboardingStore from '@/store/useOnboardingStore';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';

function OnboardingReason() {
  const { reason, setReason } = useOnboardingStore();
  const { incrementStep, decrementStep } = useStepstore();

  return (
    <ReasonContainer>
      <ProgressBar width="41.25rem" current={1} total={8} />
      <h2>{ONBOARDING_DESC.reasonTitle}</h2>
      <Input
        placeholder={ONBOARDING_DESC.reasonPlaceholder}
        setState={setReason}
      />
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={reason ? 'var(--blue-main)' : 'var(--black-50)'}
          textColor={reason ? 'var(--white-main)' : 'var(--black-300)'}
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={reason ? incrementStep : () => {}}
        />
      </BtnContainer>
    </ReasonContainer>
  );
}

export default OnboardingReason;
