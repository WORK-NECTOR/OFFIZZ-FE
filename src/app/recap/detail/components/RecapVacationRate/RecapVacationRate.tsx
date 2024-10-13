import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationRateContainer } from './RecapVacationRate.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useRecapStore from '@/store/useRecapStore';
import BackNextBtn from '../BackNextBtn';

function RecapVacationRate() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.sixthPage;

  return (
    <VacationRateContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationTodo} />
      <TextContainer>
        <RecapText text="워케이션 기간동안 계획했던 여행들을" />
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data.rate}% `} color="var(--pink-main)" />
          <RecapText text="달성했어요." />
        </div>
      </TextContainer>
      <BackNextBtn color="var(--pink-main)" />
    </VacationRateContainer>
  );
}

export default RecapVacationRate;
