import styled from 'styled-components';

export const CategoryBox = styled.div<{ isActive: boolean }>`
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 3.5rem;
  border: ${({ isActive }) =>
    isActive ? 'none' : '1px solid var(--black-200)'};

  background: ${({ isActive }) => (isActive ? '#EEF7FF' : '#FFF')};
  margin-right: 0.5rem;
  color: ${({ isActive }) => (isActive ? '#498DF2' : '#9D9D9D')};

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;

export const CategoryBoxVacation = styled.div<{ isActive: boolean }>`
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 3.5rem;
  border: ${({ isActive }) =>
    isActive ? 'none' : '1px solid var(--black-200)'};
  background: ${({ isActive }) => (isActive ? '#FFF2FB' : '#FFF')};
  margin-right: 0.5rem;
  color: ${({ isActive }) => (isActive ? '#F06FD4' : '#9D9D9D')};

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;
