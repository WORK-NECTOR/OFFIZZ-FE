import { StaticImageData } from 'next/image';

export interface RecapContentProps {
  workationId: number;
  name: string;
  address: string;
  startDate: string;
  endDate: string;
  img: StaticImageData;
}
