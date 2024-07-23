import Image from 'next/image';
import { ThumbnailProps } from '@/types/thumbnail.type';

function Thumbnail(props: ThumbnailProps) {
  const {
    width = '14.6875rem',
    height = '11.25rem',
    borderRadius = '1rem',
    objectFit = 'cover',
    src,
    alt,
  } = props;

  return (
    <Image
      style={{ width, height, borderRadius, objectFit }}
      src={src}
      alt={alt}
    />
  );
}

export default Thumbnail;
