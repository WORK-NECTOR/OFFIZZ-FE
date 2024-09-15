import styled from 'styled-components';

export const TimeRangeContainer = styled.div`
  &:first-child {
    border-top: 1px solid var(--black-200);
  }

  display: flex;
  position: relative;
`;

export const TimeRangeElWrapper = styled.div`
  width: 18.875rem;
  height: 36.25rem;
`;

export const TimeRangeEl = styled.div`
  width: 18.875rem;
  height: 1.45rem;
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
`;

export const TimeRangeFill = styled.div`
  // width: 17.5rem;
  max-width: 17.5rem;
  height: 1.45rem;
  position: absolute;
  left: 50%; // 바뀌어야 되는 값
  overflow: hidden;
  background-color: var(--blue-bright);
  border: 1px solid var(--blue-main);
  border-top: none;
`;
