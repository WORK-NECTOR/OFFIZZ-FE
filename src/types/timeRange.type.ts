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
  length: 'short' | 'long';
}

export type TimeRangeElType = {
  hour: number;
  left: string;
  width: string;
  activity: string;
};

export type TodoTime = {
  icon?: string | StaticImageData;
  time: string;
  name: string;
  isComplete: boolean;
  workTodoId?: number;
  vacationTodoId?: number;
};
