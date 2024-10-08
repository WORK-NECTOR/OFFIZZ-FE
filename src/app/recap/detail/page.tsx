'use client';

import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import RecapLoading from './components/RecapLoading';

const stepPage: { [key: number]: JSX.Element } = {
  0: <RecapLoading />,
};

function RecapDetailPage() {
  const { step } = useStepstore();

  return (
    <div className={styles.background}>
      {step === 0 && <>{stepPage[step]}</>}
      {step > 0 && (
        <div className={styles['card-container']}>{stepPage[step]}</div>
      )}
    </div>
  );
}

export default RecapDetailPage;
