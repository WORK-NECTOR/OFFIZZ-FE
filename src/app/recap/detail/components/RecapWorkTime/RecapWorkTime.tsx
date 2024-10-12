import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { WorkTimeContainer } from './RecapWorkTime.styled';

function RecapWorkTime() {
  return (
    <WorkTimeContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workTime} />
    </WorkTimeContainer>
  );
}

export default RecapWorkTime;
