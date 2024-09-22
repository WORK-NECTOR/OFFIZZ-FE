import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 20rem;
  border: 1px solid var(--black-100);
  border-radius: 0.5rem;

  li {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--black-100);
  }

  &:last-child {
    border-bottom: none;
  }
`;
