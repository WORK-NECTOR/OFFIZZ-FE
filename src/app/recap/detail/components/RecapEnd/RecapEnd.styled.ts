import styled from 'styled-components';

export const RecapEndContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  #recap-img {
    width: 12.5rem;
    height: 12.5rem;
    opacity: 0;
    animation: fade 1s forwards;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  #recap-end-text {
    opacity: 0;
    animation: fade 2.5s forwards;
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: pre;
    text-align: center;
  }

  #recap-guide-msg {
    font-size: 0.75rem;
    color: var(--black-200);
    opacity: 0;
    animation: fade 2.5s forwards;
    position: absolute;
    bottom: 2.8rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: pre;
    text-align: center;
  }

  @keyframes fade {
    to {
      opacity: 1;
    }
  }
`;
