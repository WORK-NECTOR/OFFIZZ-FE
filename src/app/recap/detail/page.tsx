'use client';

import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import RecapLoading from './components/RecapLoading';
import useAuth from '@/hook/useAuth';
import { useEffect, useState } from 'react';
import { useRecapDetailQuery } from '@/services/recap/useRecapDetailQuery';
import useWorkationStore from '@/store/useWorkationStore';
import useRecapStore from '@/store/useRecapStore';
import RecapStart from './components/RecapStart';
import RecapReason from './components/RecapReason';
import RecapWorkTime from './components/RecapWorkTime';

const stepPage: { [key: number]: JSX.Element } = {
  0: <RecapLoading />,
  1: <RecapStart />,
  2: <RecapReason />,
  3: <RecapWorkTime />,
};

function RecapDetailPage() {
  const { step, incrementStep } = useStepstore();
  const { getAccessToken } = useAuth();
  const [token, setToken] = useState('');
  const { workationId } = useWorkationStore();
  const { setRecapDetailData } = useRecapStore();
  const { data, refetch } = useRecapDetailQuery({
    workationId,
    token,
  });

  useEffect(() => {
    getAccessToken().then((tkn) => {
      if (tkn) setToken(tkn);
    });
  }, []);

  useEffect(() => {
    if (token && workationId > -1) {
      refetch();

      if (data) {
        setRecapDetailData(data);
        if (step === 0) incrementStep();
      }
    }
  }, [data, token, workationId]);

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
