import styled from 'styled-components';

export const StyledBtn = styled.button<{
  $btnHeight: string;
  $selected: boolean;
}>`
  width: fit-content;
  height: ${(props) => props.$btnHeight};
  padding: 0.5rem 1.5rem;
  border-radius: 3.5rem;
  font-size: 1.125rem;
  cursor: pointer;
  line-height: 1.5rem;
  font-weight: 600;
  font-family: Pretendard;
  background-color: ${(props) =>
    props.$selected ? 'var(--blue-pale)' : 'var(--white-main)'};
  color: ${(props) =>
    props.$selected ? 'var(--blue-main)' : 'var(--black-400)'};
  border: ${(props) =>
    props.$selected ? 'none' : '1px solid var(--black-200)'};
`;
