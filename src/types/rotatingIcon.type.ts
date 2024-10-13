import { StaticImageData } from 'next/image';

export interface RotatingIconProps {
  wh: string; // width이자 height
  imgWh: string;
  radius: string;
  bgColor: string;
  imgSrc: StaticImageData;
  rotationStart: number;
}
