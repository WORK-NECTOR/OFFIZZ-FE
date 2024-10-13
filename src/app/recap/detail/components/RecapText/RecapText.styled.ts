import styled from 'styled-components';

export const StyledRecapText = styled.p<{ $color: string }>`
  font-weight: 600;
  line-height: 1.375rem;
  white-space: pre;
  color: ${(props) => props.$color || 'var(--black-main)'};
`;
