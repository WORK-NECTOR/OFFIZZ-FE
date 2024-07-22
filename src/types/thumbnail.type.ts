import { StaticImageData } from 'next/image';

export type ObjectFitType =
  | 'fill'
  | 'contain'
  | 'cover'
  | 'none'
  | 'scale-down';

export interface ThumbnailProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: ObjectFitType;
  src: string | StaticImageData;
  alt: string;
}
