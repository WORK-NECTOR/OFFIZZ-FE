import { BadgeProps } from '@/types/badge.type';

function Badge(props: BadgeProps) {
  const {
    text,
    height = '1.625rem',
    padding = '0.25rem 0.5rem',
    borderRadius = '0.5rem',
    backgroundColor = 'var(--blue-greyish)',
    color = 'var(--blue-dark)',
  } = props;

  return (
    <div
      style={{
        width: 'max-content',
        height,
        padding,
        borderRadius,
        backgroundColor,
        color,
      }}
    >
      {text}
    </div>
  );
}

export default Badge;
