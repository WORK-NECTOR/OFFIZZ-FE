'use client';

import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';
import RecapLoading from './components/RecapLoading';
import useAuth from '@/hook/useAuth';
import { useEffect, useState } from 'react';
import { useRecapDetailQuery } from '@/services/recap/useRecapDetailQuery';
import useWorkationStore from '@/store/useWorkationStore';

const stepPage: { [key: number]: JSX.Element } = {
  0: <RecapLoading />,
};

function RecapDetailPage() {
  const { step } = useStepstore();
  const { getAccessToken } = useAuth();
  const [token, setToken] = useState('');
  const { workationId } = useWorkationStore();
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
        console.log(data);
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
