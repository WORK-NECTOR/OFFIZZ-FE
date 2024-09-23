import ProgressBar from '@/components/Bar/ProgressBar';
import { VisitContainer } from './OnboardingVisit.styled';

function OnboardingVisit() {
  return (
    <VisitContainer>
      <ProgressBar width="41.25rem" current={7} total={8} />
    </VisitContainer>
  );
}

export default OnboardingVisit;
