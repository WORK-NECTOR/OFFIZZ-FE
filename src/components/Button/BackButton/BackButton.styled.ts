import styled from 'styled-components';

export const StyledBackBtn = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black-100);
  background-color: var(--white-main);
  cursor: pointer;

  #back-arrow {
    width: 1.1rem;
    height: 0.7rem;
    transform: rotate(90deg);
  }
`;
