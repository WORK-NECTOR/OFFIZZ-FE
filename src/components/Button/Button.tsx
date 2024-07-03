import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './Button.styled';

function Button(props: ButtonProps) {
  return <StyledBtn>{props.btnText}</StyledBtn>;
}

export default Button;
