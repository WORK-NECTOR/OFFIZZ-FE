import { InputProps } from '@/types/input.type';
import { StyledInput } from './Input.styled';

function Input(props: InputProps) {
  const { placeholder, setState } = props;

  return (
    <StyledInput
      onChange={(e) => setState(e.currentTarget.value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
