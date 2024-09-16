import styled from 'styled-components';

export const InFoBoxContent = styled.div`
  width: 19.75rem;
  min-height: 5rem;
  border-bottom: 1px solid var(--Greyscale-100, #e9e9e9);
  display: flex;
  justify-content: space-between;
  margin-left: 1.5rem;
  padding-right: 0.56rem;
  margin-bottom: 1rem;
`;
export const InfoImage = styled.div`
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  background: var(--Greyscale-200, #d9d9d9);
`;
export const InfoDesc = styled.div`
  color: var(--Greyscale-Black, #000);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 133.333% */
  margin-bottom: 0.75rem;
`;
export const InfoDescP = styled.div`
  color: var(--Greyscale-600, #555);

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;
export const Info = styled.div`
  width: 11.25rem;
  margin-left: 1.25rem;
  align-items: center;
`;
