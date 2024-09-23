'use client';

import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import OnboardingStart from './components/OnboardingStart';
import OnboardingReason from './components/OnboardingReason';
import OnboardingPeriod from './components/OnboardingPeriod';
import OnboardingPlace from './components/OnboardingPlace';
import OnboardingCoreTime from './components/OnboardingCoreTime';
import OnboardingTravel from './components/OnboardingTravel';
import OnboardingWorkplace from './components/OnboardingWorkplace';
import OnboardingVisit from './components/OnboardingVisit';

const stepPage: { [key: number]: JSX.Element } = {
  0: <OnboardingStart />,
  1: <OnboardingReason />,
  2: <OnboardingPeriod />,
  3: <OnboardingPlace />,
  4: <OnboardingCoreTime />,
  5: <OnboardingTravel />,
  6: <OnboardingWorkplace />,
  7: <OnboardingVisit />,
};

function OnboardingPage() {
  const { step } = useStepstore();

  return (
    <div className={styles.background}>
      <div className={styles.container}>{stepPage[step]}</div>
    </div>
  );
}

export default OnboardingPage;
