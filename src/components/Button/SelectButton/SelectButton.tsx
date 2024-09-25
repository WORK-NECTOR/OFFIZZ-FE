import { SelectButtonProps } from '@/types/selectButton.type';
import { StyledBtn } from './SelectButton.styled';

function SelectButton(props: SelectButtonProps) {
  const { selected, btnHeight, btnText, clickHandler } = props;

  return (
    <StyledBtn
      $selected={selected}
      $btnHeight={btnHeight}
      onClick={clickHandler}
    >
      {btnText}
    </StyledBtn>
  );
}

export default SelectButton;
