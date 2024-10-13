import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationRateContainer } from './RecapVacationRate.styled';

function RecapVacationRate() {
  return (
    <VacationRateContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationTodo} />
    </VacationRateContainer>
  );
}

export default RecapVacationRate;
