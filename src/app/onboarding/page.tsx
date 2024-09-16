'use client';
import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import OnboardingStart from './components/OnboardingStart';

const stepPage: { [key: number]: JSX.Element } = {
  0: <OnboardingStart />,
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
