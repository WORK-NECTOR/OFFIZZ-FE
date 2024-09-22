import { StaticImageData } from 'next/image';

export type TimeFormat = `${number}:${number}`;

export type TimeRangeType = {
  from: TimeFormat;
  to: TimeFormat;
  icon?: string | StaticImageData;
  activity: string;
};

export interface TimeRangeProps {
  timeArr: Array<TimeRangeType>;
}

export type TimeRangeElType = {
  hour: number;
  left: string;
  width: string;
  activity: string;
};
