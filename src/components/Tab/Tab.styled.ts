import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 13.4rem;
  height: 100vh;
  flex-shrink: 0;
  border: 1px solid var(--Greyscale-100, #e9e9e9);
  background: var(--Greyscale-White, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;

  #tab-title {
    margin-top: 1.26rem;
  }
`;
export const TabListContainer = styled.div`
  display: flex;
  width: 9rem;
  padding: 0.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin-top: 3.67rem;
  border: 1px solid red;

  #tab-list {
    display: flex;
    width: 10.5rem;
    padding: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    border-radius: 0.5rem;
    background: var(--Greyscale-White, #fff);

    color: var(--Greyscale-600, #555);
    text-align: center;

    /* Kor/Body6-kor */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem; /* 137.5% */
  }
  #tab-list.active {
    display: flex;
    width: 10.5rem;
    padding: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    border-radius: 0.5rem;
    background: var(--Blue-greyish, #f4f7f9);
    color: var(--Greyscale-600, #555);
    text-align: center;

    /* Kor/Body6-kor */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem; /* 137.5% */
  }
`;
