import useStepstore from '@/store/useStepStore';
import styles from './page.module.css';

function OnboardingPage() {
  const { step } = useStepstore();

  return (
    <div className={styles['background']}>
      <div className={styles['container']}></div>
    </div>
  );
}

export default OnboardingPage;
