import { TimeRangeElType, TimeRangeProps } from '@/types/timeRange.type';
import {
  FixedHour,
  TimeRangeBg,
  TimeRangeEl,
  TimeRangeFill,
} from './TimeRange.styled';
import {
  convertHourFormat,
  convertMintoPercent,
  getHour,
  getMinute,
} from '@/utils/formatTime';
import { useMemo } from 'react';

function TimeRange(props: TimeRangeProps) {
  const { timeArr } = props;
  const fixedHours = Array.from({ length: 25 }, (_, i) => i);

  const fixedHourElArr = useMemo(() => {
    let newFixedHourElArr = fixedHours.map((hour) => ({
      hour: hour,
      left: '0',
      width: '0',
      activity: '',
    }));

    for (let i = 0; i < fixedHours.length; i++) {
      timeArr.forEach((timeEl) => {
        if (Number(getHour(timeEl.from)) === fixedHours[i]) {
          if (getHour(timeEl.to) === getHour(timeEl.from)) {
            newFixedHourElArr = newFixedHourElArr.map((el) =>
              el.hour === getHour(timeEl.to)
                ? {
                    ...el,
                    left: `${convertMintoPercent(getMinute(timeEl.from))}%`,
                    width: `${convertMintoPercent(getMinute(timeEl.from))}%`,
                    activity: timeEl.activity,
                  }
                : el,
            );
          } else if (getHour(timeEl.from) < getHour(timeEl.to)) {
            let interval = getHour(timeEl.to) - getHour(timeEl.from);
            let j = 1;

            newFixedHourElArr = newFixedHourElArr.map((el) =>
              el.hour === fixedHours[i]
                ? {
                    ...el,
                    left: `${convertMintoPercent(getMinute(timeEl.from))}%`,
                    width: `${convertMintoPercent(60 - getMinute(timeEl.from))}%`,
                    activity: timeEl.activity,
                  }
                : el,
            );

            while (j < interval) {
              newFixedHourElArr = newFixedHourElArr.map((el) =>
                el.hour === fixedHours[i] + j
                  ? {
                      ...el,
                      left: `0`,
                      width: `100%`,
                    }
                  : el,
              );
              j += 1;
            }

            newFixedHourElArr = newFixedHourElArr.map((el) =>
              el.hour === fixedHours[i] + j
                ? {
                    ...el,
                    left: `0`,
                    width: `${convertMintoPercent(getMinute(timeEl.to))}%`,
                  }
                : el,
            );

            i += j - 1;
          }
        }
      });
    }

    return newFixedHourElArr;
  }, [timeArr, fixedHours]);

  return fixedHourElArr.map((el, idx) => (
    <TimeRangeEl key={idx}>
      <FixedHour>{convertHourFormat(el.hour)}</FixedHour>
      <TimeRangeBg>
        <TimeRangeFill $left={el.left} $width={el.width}>
          {el.activity}
        </TimeRangeFill>
      </TimeRangeBg>
    </TimeRangeEl>
  ));
}

export default TimeRange;
