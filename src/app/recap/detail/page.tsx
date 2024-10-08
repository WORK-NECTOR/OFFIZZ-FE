'use client';

import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';

const stepPage: { [key: number]: JSX.Element } = {};

function RecapDetailPage() {
  const { step } = useStepstore();

  return (
    <div className={styles.background}>
      {step > 0 && <div className={styles.container}>{stepPage[step]}</div>}
    </div>
  );
}

export default RecapDetailPage;
