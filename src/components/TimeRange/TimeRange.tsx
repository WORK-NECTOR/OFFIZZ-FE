import { TimeRangeProps } from '@/types/timeRange.type';
import {
  FixedHour,
  TimeRangeBg,
  TimeRangeEl,
  TimeRangeFill,
} from './TimeRange.styled';

function TimeRange(props: TimeRangeProps) {
  const { timeArr } = props;
  const fixedHourArr = Array.from({ length: 25 }, (_, i) => i);
  // 왼쪽에 나타날 [12, 1, ..., 11, 12] 숫자 배열

  return fixedHourArr.map((el, idx) => (
    <TimeRangeEl key={idx}>
      <FixedHour>{el}</FixedHour>
      <TimeRangeBg>
        <TimeRangeFill></TimeRangeFill>
      </TimeRangeBg>
    </TimeRangeEl>
  ));
}

export default TimeRange;
