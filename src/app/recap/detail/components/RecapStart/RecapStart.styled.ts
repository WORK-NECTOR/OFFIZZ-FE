import styled from 'styled-components';

export const RecapStartContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1.75rem;
  white-space: pre;

  @keyframes fade {
    to {
      opacity: 1;
    }
  }
`;

export const RecapStartTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  margin-top: 2rem;
  opacity: 0;
  animation: fade 2s forwards;

  #recap-title {
    font-family: Figtree;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
  }

  #recap-desc {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
  }
`;

export const RecapStartBottom = styled.div`
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  position: absolute;
  bottom: 2rem;
  opacity: 0;
  animation: fade 2s forwards;
  animation-delay: 1s;

  #workation-place-wrapper {
    display: flex;
    gap: 0.25rem;
  }

  #workation-place-ic {
    width: 0.75rem;
    height: 0.75rem;
  }

  #workation-place {
  }

  #workation-date {
  }
`;
