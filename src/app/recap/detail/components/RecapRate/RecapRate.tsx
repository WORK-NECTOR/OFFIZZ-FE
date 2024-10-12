import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { RateContainer } from './RecapRate.styled';

function RecapRate() {
  return (
    <RateContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workTodo} />
    </RateContainer>
  );
}

export default RecapRate;
