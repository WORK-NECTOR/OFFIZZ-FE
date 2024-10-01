import styled from 'styled-components';

export const RecodeWapper = styled.div`
 display: flex;
width: 18.625rem;
height: 36.25rem;
flex-direction: column;
gap: 0.5rem;
  justify-content: left;
`;
export const RecodeBox = styled.div`
width: 18.625rem;
height: 5rem;
  border: 1px solid black;
  display: flex;
`;
export const RecodeImg = styled.div`
width: 5rem;
height: 5rem;
background-color: gray;
  border: 1px solid black;
  margin-right: 0.5rem;
`;
export const RecodeTitle = styled.div`
margin-top: 0.44rem;
margin-bottom: 0.5rem;
color: var(--Greyscale-Black, #000);

/* Kor/Caption1-kor */
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.125rem; /* 128.571% */
`;
export const RecodeSub = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.5rem;
color: var(--Greyscale-600, #555);

/* Kor/Caption4-kor */
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem; /* 133.333% */
`;
export const RecodeComment = styled.div`
color: var(--Greyscale-Black, #000);

/* Kor/Caption4-kor */
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem; /* 133.333% */
`;