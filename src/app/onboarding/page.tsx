'use client';
import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import OnboardingStart from './components/OnboardingStart';
import OnboardingReason from './components/OnboardingReason';
import OnboardingPeriod from './components/OnboardingPeriod';

const stepPage: { [key: number]: JSX.Element } = {
  0: <OnboardingStart />,
  1: <OnboardingReason />,
  2: <OnboardingPeriod />,
};

function OnboardingPage() {
  const { step } = useStepstore();

  return (
    <div className={styles['background']}>
      <div className={styles['container']}>{stepPage[step]}</div>
    </div>
  );
}

export default OnboardingPage;
