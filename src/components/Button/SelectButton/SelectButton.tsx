import { SelectButtonProps } from '@/types/selectButton.type';
import { StyledBtn } from './SelectButton.styled';

function SelectButton(props: SelectButtonProps) {
  const { selected, btnHeight, btnText } = props;

  return (
    <StyledBtn $selected={selected} $btnHeight={btnHeight}>
      {btnText}
    </StyledBtn>
  );
}

export default SelectButton;
