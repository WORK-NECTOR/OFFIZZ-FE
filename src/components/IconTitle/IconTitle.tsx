import { IconTitleProps } from '@/types/iconTitle.type';
import { IconTitleContainer } from './IconTitle.styled';
import Image from 'next/image';

function IconTitle(props: IconTitleProps) {
  const { icon, title } = props;

  return (
    <IconTitleContainer>
      <Image src={icon} alt={title} id="ict-img" />
      <p id="ict-title">{title}</p>
    </IconTitleContainer>
  );
}

export default IconTitle;