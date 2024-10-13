import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { WorkRateContainer } from './RecapWorkRate.styled';
import useRecapStore from '@/store/useRecapStore';
import RecapText from '../RecapText';
import TextContainer from '../TextContainer';
import BackNextBtn from '../BackNextBtn';

function RecapWorkRate() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.thirdPage;

  return (
    <WorkRateContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workTodo} />
      <TextContainer>
        <RecapText text="워케이션 기간동안 계획했던 일들을" />
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data.rate}% `} color="var(--blue-main)" />
          <RecapText text="달성했어요." />
        </div>
      </TextContainer>
      <BackNextBtn />
    </WorkRateContainer>
  );
}

export default RecapWorkRate;
