import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './Button.styled';

function Button(props: ButtonProps) {
  const {
    btnType,
    btnHeight,
    btnText,
    btnColor,
    textColor,
    hoverColor,
    clickHandler,
  } = props;

  return (
    <StyledBtn
      onClick={clickHandler}
      $btnType={btnType}
      $btnHeight={btnHeight}
      $btnColor={btnColor}
      $textColor={textColor}
      $hoverColor={hoverColor}
    >
      {btnText}
    </StyledBtn>
  );
}

export default Button;
