import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 20rem;
  border: 1px solid var(--black-100);
  border-radius: 0.5rem;
  list-style: none;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListEl = styled.li<{ $selected: boolean }>`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--black-100);
  border: ${(props) => (props.$selected ? '1px solid var(--blue-main)' : '')};
  background-color: ${(props) =>
    props.$selected ? 'var(--Blue-pale, #EEF7FF)' : ''};
  cursor: pointer;
`;
