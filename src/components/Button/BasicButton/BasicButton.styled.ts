import styled from 'styled-components';
import { BtnType } from '@/types/button.type';

export const StyledBtn = styled.button<{
  $btnType: BtnType;
  $btnHeight: string;
  $btnColor?: string;
  $textColor: string;
  $hoverColor?: string;
  $padding: string;
  $fontSize?: string;
}>`
  background-color: ${(props) =>
    props.$btnType === 'empty' ? 'transparent' : props.$btnColor};
  border: ${(props) =>
    props.$btnType === 'empty' ? `1px solid ${props.$textColor}` : 'none'};
  color: ${(props) => props.$textColor};
  border-radius: 3rem;
  width: fit-content;
  height: ${(props) => props.$btnHeight};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize || '1.25rem'};
  font-weight: 600;
  font-family: Pretendard;
  line-height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$hoverColor || props.$btnColor || 'initial'};
    transition: background-color 0.5s ease-out;
  }
`;
