import styled from 'styled-components';

export const PaginationBarContainer = styled.div`
  display: flex;
  gap: 4px;

  &:first-child {
    padding-right: 0.25rem;
  }

  &:last-child {
    padding-left: 0.25rem;
  }

  .arrow {
    width: 1.5rem;
    height: 2rem;
  }

  #left-arrow {
    transform: rotate(180deg);
  }

  #right-arrow {
  }
`;

export const PageEl = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 2.5rem;
`;
