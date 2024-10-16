import styled from 'styled-components';

export const RecapLayout = styled.div`
  width: 30.625rem;
  height: 18.7rem;
  border-radius: 16px;
  background-color: var(--blue-pale);

  #recap-info-wrapper {
    width: 20.875rem;
    height: 6.565rem;
    margin-top: 1.81rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  #recap-info-main {
    color: var(--black-main);
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    margin-bottom: 0.69rem;
  }

  #recap-info-sub {
    color: var(--black-700);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
  }

  #recap-img {
    position: absolute;
    z-index: 1;
    width: 15rem;
    height: 15rem;
    margin-left: 13.63rem;
  }

  #recap-play {
    width: 1.75rem;
    height: 1.75rem;
    margin-top: 1rem;
  }
`;
