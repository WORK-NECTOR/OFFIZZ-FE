import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './Button.styled';

function Button(props: ButtonProps) {
  const { btnType, btnSize, btnText, btnColor, textColor } = props;

  return (
    <StyledBtn
      $btnType={btnType}
      $btnSize={btnSize}
      $btnColor={btnColor}
      $textColor={textColor}
    >
      {btnText}
    </StyledBtn>
  );
}

export default Button;
