import styled from 'styled-components';

export const StyledProgressBar = styled.progress<{ $width: string }>`
  width: ${(props) => props.$width || '41.25rem'};
`;
