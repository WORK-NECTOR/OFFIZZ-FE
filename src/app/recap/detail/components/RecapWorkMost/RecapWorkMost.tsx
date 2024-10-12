import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { WorkMostContainer } from './RecapWorkMost.styled';

function RecapWorkMost() {
  return (
    <WorkMostContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workMost} />
    </WorkMostContainer>
  );
}

export default RecapWorkMost;
