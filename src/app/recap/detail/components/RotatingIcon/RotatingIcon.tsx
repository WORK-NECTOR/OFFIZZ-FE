import Image from 'next/image';
import { RotatingIconBox } from './RotatingIcon.styled';
import { RotatingIconProps } from '@/types/rotatingIcon.type';

function RotatingIcon(props: RotatingIconProps) {
  const { wh, radius, bgColor, imgSrc, imgWh, rotationStart } = props;

  return (
    <RotatingIconBox
      $wh={wh}
      $imgWh={imgWh}
      $radius={radius}
      $bgColor={bgColor}
      $rotationStart={rotationStart}
    >
      <Image id="rotating-icon-img" src={imgSrc} alt="회전 아이콘 이미지" />
    </RotatingIconBox>
  );
}

export default RotatingIcon;
