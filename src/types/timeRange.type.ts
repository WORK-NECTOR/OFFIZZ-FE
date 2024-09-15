import { StaticImageData } from 'next/image';

export type TimeFormat = `${number}:${number}`;

export type TimeRangeType = {
  to: TimeFormat;
  from: TimeFormat;
  icon?: string | StaticImageData;
  activity: string;
};

export interface TimeRangeProps {
  timeArr: Array<TimeRangeType>;
}
