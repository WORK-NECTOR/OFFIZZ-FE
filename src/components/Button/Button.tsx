import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './Button.styled';

function Button(props: ButtonProps) {
  const { btnType, btnSize, btnText, btnColor, textColor, hoverColor } = props;

  return (
    <StyledBtn
      $btnType={btnType}
      $btnSize={btnSize}
      $btnColor={btnColor}
      $textColor={textColor}
      $hoverColor={hoverColor}
    >
      {btnText}
    </StyledBtn>
  );
}

export default Button;
