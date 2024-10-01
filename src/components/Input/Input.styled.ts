import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 41.25rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--black-100);
  outline: none;

  &::placeholder {
    line-height: 18px;
    color: var(--black-400);
  }
`;
