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
import { useEffect } from 'react';

function TimeRange(props: TimeRangeProps) {
  const { timeArr } = props;
  const fixedHours = Array.from({ length: 25 }, (_, i) => i); // 0 ~ 24
  let fixedHourElArr: Array<TimeRangeElType> = fixedHours.map((hour) => ({
    hour: hour,
    left: '0',
    width: '0',
    activity: '',
  }));

  useEffect(() => {
    for (let i = 0; i < fixedHours.length; i++) {
      timeArr.forEach((timeEl) => {
        if (Number(getHour(timeEl.from)) == fixedHours[i]) {
          if (getHour(timeEl.to) === getHour(timeEl.from)) {
            fixedHourElArr = fixedHourElArr.map((el) =>
              el.hour === getHour(timeEl.to)
                ? {
                    ...el,
                    left: `${convertMintoPercent(getMinute(timeEl.from))}%`,
                    width: `${convertMintoPercent(getMinute(timeEl.from))}%`,
                    activity: timeEl.activity,
                  }
                : el,
            );
          }

          if (getHour(timeEl.from) < getHour(timeEl.to)) {
            let interval = getHour(timeEl.to) - getHour(timeEl.from);
            let j = 1;

            fixedHourElArr = fixedHourElArr.map((el) =>
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
              fixedHourElArr = fixedHourElArr.map((el) =>
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

            fixedHourElArr = fixedHourElArr.map((el) =>
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
  }, []);

  useEffect(() => {
    console.log(fixedHourElArr);
  }, [fixedHourElArr.length]);

  return fixedHours.map((el, idx) => (
    <TimeRangeEl key={idx}>
      <FixedHour>{convertHourFormat(el)}</FixedHour>
      <TimeRangeBg>
        <TimeRangeFill
          $left={fixedHourElArr.find((item) => item.hour == el)?.left || ''}
          $width={fixedHourElArr.find((item) => item.hour == el)?.width || ''}
        ></TimeRangeFill>
      </TimeRangeBg>
    </TimeRangeEl>
  ));
}

export default TimeRange;
