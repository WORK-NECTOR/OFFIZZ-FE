import { StyledRecapText } from './RecapText.styled';

function RecapText(props: { text: string; color?: string }) {
  const { text, color = 'var(--black-main)' } = props;

  return <StyledRecapText $color={color}>{text}</StyledRecapText>;
}

export default RecapText;
