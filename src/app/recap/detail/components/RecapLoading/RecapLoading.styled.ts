import styled from 'styled-components';

export const RecapLoadingContainer = styled.div`
  position: relative;

  #logo-img {
    width: 1.75rem;
    height: 0.5625rem;
    position: absolute;
    bottom: 11.625rem;
    left: 50%;
    transform: translateX(-50%);
  }

  #recap-character {
    width: 12.5rem;
    height: 12.5rem;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    stroke-width: 1px;
    stroke: #fff;
    background-color: var(--Glass-30, rgba(255, 255, 255, 0.3));
    border-radius: 50%;
    position: relative;
  }

  .circle[data-size='small'] {
    width: 15.75rem;
    height: 15.75rem;
    position: relative;
  }

  .circle[data-size='medium'] {
    width: 28.625rem;
    height: 28.625rem;
    position: relative;
  }

  .circle[data-size='large'] {
    width: 44rem;
    height: 44rem;
    position: relative;
  }

  /* .icon {
    width: 28px;
    height: 28px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    transform-origin: 50% 8.8rem;
    animation: rotateIcon 3s linear infinite;
  } */

  #loading-text {
    position: absolute;
    bottom: 9.375rem;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
  }
`;
