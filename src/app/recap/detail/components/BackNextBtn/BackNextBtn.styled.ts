import styled from 'styled-components';

export const BackNextBtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 2rem;
`;

export const BackBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--black-100);
  background-color: var(--white-main);
  cursor: pointer;

  #arrow-img {
    width: 1rem;
    height: 0.8rem;
    transform: rotate(90deg);
  }
`;

export const NextBtn = styled.button`
  width: 5rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background-color: var(--blue-main);
  color: var(--white-main);
  border: none;
  font-family: Pretendard;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 600;
  cursor: pointer;
`;
