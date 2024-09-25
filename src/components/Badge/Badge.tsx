import { BadgeProps } from '@/types/badge.type';

function Badge(props: BadgeProps) {
  const {
    text,
    height = '1.625rem',
    padding = '0.25rem 0.5rem',
    borderRadius = '0.5rem',
    backgroundColor = 'var(--blue-greyish)',
    color = 'var(--blue-dark)',
    fontSize = '0.875rem',
  } = props;

  return (
    <div
      style={{
        width: 'fit-content',
        height,
        padding,
        borderRadius,
        backgroundColor,
        color,
        fontSize,
        boxSizing: 'border-box',
      }}
    >
      {text}
    </div>
  );
}

export default Badge;
