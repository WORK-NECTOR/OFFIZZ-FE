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
    fontSize = '1.25rem',
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
      $fontSize={fontSize}
    >
      {btnText}
    </StyledBtn>
  );
}

export default BasicButton;
