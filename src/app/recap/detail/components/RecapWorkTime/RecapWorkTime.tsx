import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import TitleLine from '../TitleLine';
import { WorkTimeContainer } from './RecapWorkTime.styled';
import TextContainer from '../TextContainer';
import RecapText from '../RecapText';
import useRecapStore from '@/store/useRecapStore';
import BackNextBtn from '../BackNextBtn';

function RecapWorkTime() {
  const { recapDetailData } = useRecapStore();
  const data = recapDetailData.secondPage;

  function formatTime(time: string): string {
    const [hourStr, minuteStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    const period = hour < 12 ? '오전' : '오후';

    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }

    return minute === 0
      ? `${period} ${hour}시`
      : `${period} ${hour}시 ${minute}분`;
  }

  return (
    <WorkTimeContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.workTime} />
      <TextContainer>
        <RecapText text="워케이션 기간동안" />
        <div style={{ display: 'flex' }}>
          <RecapText
            text={`총 ${data.totalTime}시간 `}
            color="var(--blue-main)"
          />
          <RecapText text="일했어요." />
        </div>
      </TextContainer>
      <TextContainer>
        <div style={{ display: 'flex' }}>
          <RecapText
            text={formatTime(data.startTime)}
            color="var(--blue-main)"
          />
          <RecapText text="부터 " />
          <RecapText text={formatTime(data.endTime)} color="var(--blue-main)" />
          <RecapText text="까지" />
        </div>
        <div style={{ display: 'flex' }}>
          <RecapText text="하루 " />
          <RecapText
            text={`평균 ${data.averageTime}시간 `}
            color="var(--blue-main)"
          />
          <RecapText text="일했어요." />
        </div>
      </TextContainer>
      <BackNextBtn />
    </WorkTimeContainer>
  );
}

export default RecapWorkTime;
