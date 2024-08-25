import { ButtonProps } from '@/types/button.type';
import { StyledBtn } from './BasicButton.styled';

function BasicButton(props: ButtonProps) {
  const {
    btnType,
    btnHeight,
    btnText,
    btnColor,
    textColor,
    hoverColor,
    padding,
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
      $padding={padding}
    >
      {btnText}
    </StyledBtn>
  );
}

export default BasicButton;
