import { InputProps } from '@/types/input.type';
import { StyledInput } from './Input.styled';

function Input(props: InputProps) {
  const { placeholder, setState } = props;

  return <StyledInput placeholder={placeholder} />;
}

export default Input;
