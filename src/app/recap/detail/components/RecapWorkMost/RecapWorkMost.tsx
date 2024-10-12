import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { WorkMostContainer } from './RecapWorkMost.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useRecapStore from '@/store/useRecapStore';
import BackNextBtn from '../BackNextBtn';

function RecapWorkMost() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.fourthPage;

  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    const monthNum = parseInt(month);

    return `${monthNum}월 ${parseInt(day)}일`;
  }

  return (
    <WorkMostContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workMost} />
      <TextContainer>
        <RecapText text="워케이션 기간 중" />
        <RecapText text="가장 업무에 열정적이었던 날은" />
        <div style={{ display: 'flex' }}>
          <RecapText
            text={formatDate(data.passionDate)}
            color="var(--blue-main)"
          />
          <RecapText text="이었어요." />
        </div>
      </TextContainer>
      <TextContainer>
        <RecapText text="다른 날들에 비해," />
        <div style={{ display: 'flex' }}>
          <RecapText text={`${data.diff}시간 `} color="var(--blue-main)" />
          <RecapText text="많이 일했어요" />
        </div>
      </TextContainer>
      <BackNextBtn />
    </WorkMostContainer>
  );
}

export default RecapWorkMost;
