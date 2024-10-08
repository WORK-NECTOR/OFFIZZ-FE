import styled from 'styled-components';

export const TimeRangeContainer = styled.div`
  &:first-child {
    border-top: 1px solid var(--black-200);
  }

  display: flex;
  position: relative;
`;

export const TimeRangeIconWrapper = styled.div<{ $length: 'short' | 'long' }>`
  height: ${(props) => (props.$length === 'short' ? '26.625rem' : '36rem')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .time-icon {
    width: 1rem;
    height: 1rem;
  }
`;

export const TimeRangeElWrapper = styled.div<{ $length: 'short' | 'long' }>`
  width: 18.875rem;
  height: ${(props) => (props.$length === 'short' ? '26.625rem' : '36rem')};
`;

export const TimeRangeEl = styled.div<{ $length: 'short' | 'long' }>`
  width: 18.875rem;
  height: ${(props) => (props.$length === 'short' ? '1.07rem' : '1.45rem')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const FixedHour = styled.span`
  font-size: 0.75rem;
  color: var(--black-400);
`;

export const TimeRangeBg = styled.div`
  width: 17.5rem;
  height: 1.45rem;
  border-bottom: 1px solid var(--black-200);
  position: relative;
`;

export const TimeRangeFill = styled.div<{ $left: string; $width: string }>`
  width: ${(props) => props.$width};
  max-width: 17.5rem;
  height: ${(props) => (props.$width === '0' ? '0' : '1.45rem')};
  position: absolute;
  left: ${(props) => props.$left};
  overflow: hidden;
  background-color: var(--blue-bright);
  border: ${(props) =>
    props.$width === '0' ? 'none' : '1px solid var(--blue-main)'};
  border-top: none;
  color: var(--white-main);
  font-weight: 600;
  font-size: 12px;
  display: flex;
  padding-left: 0.125rem;
  align-items: center;
`;
