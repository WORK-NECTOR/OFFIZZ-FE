import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationTimeContainer } from './RecapVacationTime.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useRecapStore from '@/store/useRecapStore';

function RecapVacationTime() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.fifthPage;

  return (
    <VacationTimeContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationTime} />
      <TextContainer>
        <RecapText text="워케이션 기간동안" />
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data.bestWorkDays}`} />
        </div>
      </TextContainer>
    </VacationTimeContainer>
  );
}

export default RecapVacationTime;
