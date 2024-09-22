import styled from 'styled-components';

export const TodoBox = styled.div`
  display: flex;
  width: 17.5rem;
  padding: 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: space-between;
  background: var(--Greyscale-White, #fff);
  border-bottom: 1px solid var(--Greyscale-100, #e9e9e9);
`;
export const TodoTitle = styled.div`
  margin-left: 0.5rem;
  color: var(--Greyscale-700, #434343);

  /* Kor/Caption1-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 128.571% */
`;
export const TodoSub = styled.div`
  margin-left: 0.5rem;
  color: var(--Greyscale-700, #434343);

  /* Eng/Caption4-eng */
  font-family: Figtree;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
`;
