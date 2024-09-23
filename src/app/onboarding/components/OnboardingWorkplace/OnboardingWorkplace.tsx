import ProgressBar from '@/components/Bar/ProgressBar';
import { WorkplaceContainer } from './OnboardingWorkplace.styled';

function OnboardingWorkplace() {
  return (
    <WorkplaceContainer>
      <ProgressBar width="41.25rem" current={6} total={8} />
    </WorkplaceContainer>
  );
}

export default OnboardingWorkplace;
