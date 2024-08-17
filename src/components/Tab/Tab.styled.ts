import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 13.4rem;
  height: 100vh;
  flex-shrink: 0;
  background-color: #f9f9f9;
  padding-top: 2.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #tab-title {
    color: var(--Greyscale-Black, #000);
    text-align: center;
    font-family: SUIT;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

  #tab-list {
    display: flex;
    width: 9rem;
    padding: 0.4rem;
    margin-bottom: 1.12rem;
    align-items: center;
    gap: 0.4rem;
    background: #e6e6e6;
    color: var(--Greyscale-Black, #000);
    text-align: center;
    font-family: SUIT;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
