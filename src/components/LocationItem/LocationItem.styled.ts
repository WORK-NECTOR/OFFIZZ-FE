import styled from 'styled-components';

export const LocationItemWraper = styled.div`
  width: 41.25rem;
  height: 3.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.4375rem 1rem;
`;

export const LocationTextWrapper = styled.div`
  height: 2.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }

  p {
    font-size: 0.75rem;
    color: var(--black-500);
    font-weight: 400;
    line-height: 1rem;
  }
`;
