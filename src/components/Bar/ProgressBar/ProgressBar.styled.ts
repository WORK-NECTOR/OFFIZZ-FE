import styled from 'styled-components';

export const ProgressBarContainer = styled.div``;

export const StyledProgressBar = styled.progress<{ $width: string }>`
  width: ${(props) => props.$width || '41.25rem'};
`;

export const ProgressStep = styled.div`
  font-size: 0.875rem;
  color: var(--black-400);
`;
