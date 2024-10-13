import styled from 'styled-components';

export const RotatingIconBox = styled.div<{
  $wh: string;
  $imgWh: string;
  $bgColor: string;
  $radius: string;
  $rotationStart: number;
}>`
  width: ${(props) => props.$wh};
  height: ${(props) => props.$wh};
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  box-shadow: 0px 0px 12px 0px ${(props) => props.$bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, 0)
    rotate(${(props) => props.$rotationStart || 0}deg);
  transform-origin: 50% ${(props) => props.$radius};
  animation: rotateIcon 4s linear infinite;
  animation-delay: ${(props) => `-${(props.$rotationStart / 360) * 4}s`};

  #rotating-icon-img {
    width: ${(props) => props.$imgWh};
    height: ${(props) => props.$imgWh};
  }

  @keyframes rotateIcon {
    from {
      transform: translate(-50%, 0)
        rotate(${(props) => props.$rotationStart || '0deg'});
    }
    to {
      transform: translate(-50%, 0)
        rotate(
          ${(props) =>
            props.$rotationStart
              ? `${props.$rotationStart + 360}deg`
              : '360deg'}
        );
    }
  }
`;
