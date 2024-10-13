import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationMostContainer } from './RecapVacationMost.styled';
import useUserStore from '@/store/useUserStore';

function RecapVacationMost() {
  const { name } = useUserStore();

  return (
    <VacationMostContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationMost} />
    </VacationMostContainer>
  );
}

export default RecapVacationMost;
