import styled from 'styled-components';
import { BtnSize, BtnType } from '@/types/button.type';

export const StyledBtn = styled.button<{
  $btnType: BtnType;
  $btnSize: BtnSize;
  $btnColor?: string;
  $textColor: string;
  $hoverColor?: string;
}>`
  background-color: ${(props) =>
    props.$btnType === 'empty' ? 'transparent' : props.$btnColor};
  border: ${(props) =>
    props.$btnType === 'full' ? 'none' : `1px solid ${props.$textColor}`};
  color: ${(props) => props.$textColor};
  border-radius: 3rem;
  height: ${(props) => (props.$btnSize === 'medium' ? '2.75rem' : '3rem')};
  padding: 1rem 2rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.$hoverColor || props.$btnColor || 'initial'};
    transition: 0.5s;
  }
`;
