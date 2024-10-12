import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import BackNextBtn from '../BackNextBtn';
import TitleLine from '../TitleLine';
import { RecapReasonContainer } from './RecapReason.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useUserStore from '@/store/useUserStore';
import useRecapStore from '@/store/useRecapStore';

function RecapReason() {
  const { name } = useUserStore();
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.firstPage;

  return (
    <RecapReasonContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.reason} />
      <TextContainer>
        <RecapText text={`${name}님은`} />
        <div style={{ display: 'flex' }}>
          <RecapText text={data.reason} color="var(--blue-main)" />
          <RecapText text={'(이)라는 이유로'} />
        </div>
        <RecapText text={'워케이션을 왔어요.'} />
      </TextContainer>
      <BackNextBtn />
    </RecapReasonContainer>
  );
}

export default RecapReason;
