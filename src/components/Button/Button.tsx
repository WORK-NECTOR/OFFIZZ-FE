import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './Button.styled';

function Button(props: ButtonProps) {
  return (
    <StyledBtn
      $btnType={props.btnType}
      $btnSize={props.btnSize}
      $btnColor={props.btnColor}
      $textColor={props.textColor}
    >
      {props.btnText}
    </StyledBtn>
  );
}

export default Button;
