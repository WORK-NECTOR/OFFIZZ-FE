import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationTimeContainer } from './RecapVacationTime.styled';

function RecapVacationTime() {
  return (
    <VacationTimeContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationTime} />
    </VacationTimeContainer>
  );
}

export default RecapVacationTime;
