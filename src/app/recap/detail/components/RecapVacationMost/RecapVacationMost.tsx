import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { VacationMostContainer } from './RecapVacationMost.styled';
import useUserStore from '@/store/useUserStore';
import RecapText from '../RecapText';
import TextContainer from '../TextContainer';
import useRecapStore from '@/store/useRecapStore';
import { formatDate } from '@/utils/formatDate';
import BackNextBtn from '../BackNextBtn';

function RecapVacationMost() {
  const { name } = useUserStore();
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.seventhPage.bestVacations;

  return (
    <VacationMostContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.vacationMost} />
      <TextContainer>
        <RecapText text={`${name}님은 방문한 여행지 중,`} />
        <div style={{ display: 'flex' }}>
          <RecapText
            text={`${formatDate(data[0].date)}`}
            color="var(--pink-main)"
          />
          <RecapText text="에 방문한" />
        </div>
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data[0].name}`} color="var(--pink-main)" />
          <RecapText text="을 가장 좋아했어요." />
        </div>
      </TextContainer>
      <BackNextBtn color="var(--pink-main)" />
    </VacationMostContainer>
  );
}

export default RecapVacationMost;
