import { BadgeProps } from '@/types/badge.type';

function Badge(props: BadgeProps) {
  const {
    text,
    backgroundColor = 'var(--blue-greyish)',
    color = 'var(--blue-dark)',
  } = props;

  return <div>{text}</div>;
}

export default Badge;
