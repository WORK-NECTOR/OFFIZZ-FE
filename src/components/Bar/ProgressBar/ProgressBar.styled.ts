import styled from 'styled-components';

export const ProgressBarContainer = styled.div``;

export const StyledProgressBar = styled.progress<{ $width: string }>`
  width: ${(props) => props.$width || '41.25rem'};
  height: 0.5rem;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    background: var(--Greyscale-50, #f5f5f5);
    border-radius: 1.5rem;
  }

  &::-webkit-progress-value {
    background: linear-gradient(270deg, #f0b1e1 0%, #498df2 100%);
    border-radius: 1.5rem;
  }

  &::-moz-progress-bar {
    background: linear-gradient(270deg, #f0b1e1 0%, #498df2 100%);
    border-radius: 1.5rem;
  }
`;

export const ProgressStep = styled.div`
  font-size: 0.875rem;
  color: var(--black-400);
`;
