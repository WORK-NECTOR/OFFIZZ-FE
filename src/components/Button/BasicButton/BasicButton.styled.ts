import styled from 'styled-components';
import { BtnType } from '@/types/button.type';

export const StyledBtn = styled.button<{
  $btnType: BtnType;
  $btnHeight: string;
  $btnColor?: string;
  $textColor: string;
  $hoverColor?: string;
  $padding: string;
}>`
  background-color: ${(props) =>
    props.$btnType === 'empty' ? 'transparent' : props.$btnColor};
  border: ${(props) =>
    props.$btnType === 'empty' ? 'none' : `1px solid ${props.$textColor}`};
  color: ${(props) => props.$textColor};
  border-radius: 3rem;
  height: ${(props) => props.$btnHeight};
  padding: ${(props) => props.$padding};
  font-size: 1.25rem;
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
