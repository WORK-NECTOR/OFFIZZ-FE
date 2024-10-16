'use client';

import { Fragment, useEffect, useState } from 'react';
import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import RecapLoading from './components/RecapLoading';
import useAuth from '@/hook/useAuth';
import { useRecapDetailQuery } from '@/services/recap/useRecapDetailQuery';
import useWorkationStore from '@/store/useWorkationStore';
import useRecapStore from '@/store/useRecapStore';
import RecapStart from './components/RecapStart';
import RecapReason from './components/RecapReason';
import RecapWorkTime from './components/RecapWorkTime';
import RecapWorkRate from './components/RecapWorkRate';
import RecapWorkMost from './components/RecapWorkMost';
import RecapVacationTime from './components/RecapVacationTime';
import RecapVacationRate from './components/RecapVacationRate';
import RecapVacationMost from './components/RecapVacationMost';
import RecapEnd from './components/RecapEnd';

const stepPage: { [key: number]: JSX.Element } = {
  0: <RecapLoading />,
  1: <RecapStart />,
  2: <RecapReason />,
  3: <RecapWorkTime />,
  4: <RecapWorkRate />,
  5: <RecapWorkMost />,
  6: <RecapVacationTime />,
  7: <RecapVacationRate />,
  8: <RecapVacationMost />,
  9: <RecapEnd />,
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
      {step === 0 && <div>{stepPage[step]}</div>}
      {step > 0 && (
        <div className={styles['card-container']}>{stepPage[step]}</div>
      )}
    </div>
  );
}

export default RecapDetailPage;
