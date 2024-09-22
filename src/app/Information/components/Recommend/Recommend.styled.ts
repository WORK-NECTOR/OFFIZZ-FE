import styled from 'styled-components';

export const RecommendBox = styled.div`
width: 20rem;
height: 22.25rem;
margin-top: 0.75rem;
flex-shrink: 0;
border-radius: 1rem;
border: 1px solid var(--Greyscale-100, #E9E9E9);
background: var(--Greyscale-White, #FFF);
padding: 1.5rem;
`;
export const LinkStyle = styled.a`
  text-decoration: none;
  color: var(--Blue-main, #498DF2);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }
`;
export const NonRecomend = styled.div`
margin-top: 1rem;
display: flex;
width: 17rem;
padding: 0.5625rem 0.5rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.25rem;
border-radius: 0.5rem;
background: var(--Blue-pale, #EEF7FF);
  p{
    color: var(--Greyscale-Black, #000);
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 1.375rem;
margin-left: 0.38rem;
  }
`;
export const NonRecomendSub = styled.div`
color: var(--Greyscale-700, #434343);
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
`;
export const NonRecommendBox = styled.div`
display: flex;
width: 17rem;
height: 10rem;
padding: 0.5rem;
align-items: flex-start;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--Greyscale-30, #FCFCFC);
color: var(--Greyscale-400, #9D9D9D);
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
`;