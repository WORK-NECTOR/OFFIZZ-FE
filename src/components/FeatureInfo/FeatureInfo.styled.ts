import styled from 'styled-components';

export const FeatureInfoContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.625rem;
`;

export const DottedLine = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: var(--black-main);
  }
`;

export const EnTitleDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-family: Figtree;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: var(--black-400);
  }
`;
