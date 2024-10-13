import { StyledRecapText } from './RecapText.styled';

// eslint-disable-next-line react/require-default-props
function RecapText(props: { text: string; color?: string }) {
  const { text, color = 'var(--black-main)' } = props;

  return <StyledRecapText $color={color}>{text}</StyledRecapText>;
}

export default RecapText;
