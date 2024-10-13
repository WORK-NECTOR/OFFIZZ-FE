import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationTimeContainer } from './RecapVacationTime.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useRecapStore from '@/store/useRecapStore';
import BackNextBtn from '../BackNextBtn';

function RecapVacationTime() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.fifthPage;

  return (
    <VacationTimeContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationTime} />
      <TextContainer>
        <RecapText text="워케이션 기간동안" />
        <div style={{ display: 'flex' }}>
          <RecapText
            text={`${data.totalVacation}개`}
            color="var(--pink-main)"
          />
          <RecapText text="의 여행 기록을 남겼어요." />
        </div>
      </TextContainer>
      <TextContainer>
        <RecapText text="여행 기록의 평균 만족도는" />
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data.averageRate}점`} color="var(--pink-main)" />
          <RecapText text="이에요." />
        </div>
      </TextContainer>
      <BackNextBtn color="var(--pink-main)" />
    </VacationTimeContainer>
  );
}

export default RecapVacationTime;
