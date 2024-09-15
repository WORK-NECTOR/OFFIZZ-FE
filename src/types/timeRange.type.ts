import { StaticImageData } from 'next/image';

export type TimeFormat = `${number}:${number}`;

export type TimeRangeType = {
  to: TimeFormat;
  from: TimeFormat;
  color: string;
  icon?: string | StaticImageData;
  activity: string;
};

export interface TimeRangeProps {
  timeArr: Array<TimeRangeType>;
}
