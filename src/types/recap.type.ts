import { StaticImageData } from 'next/image';

export interface RecapContentProps {
  mainText: string;
  subText: string;
  startDate: string;
  endDate: string;
  img: StaticImageData;
}
