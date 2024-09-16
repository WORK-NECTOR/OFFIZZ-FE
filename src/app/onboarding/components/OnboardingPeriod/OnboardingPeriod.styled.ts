import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const PeriodContainer = styled.div`
  height: 31.5rem;
  position: relative;

  h2 {
    margin: 2.5rem 0 1.75rem 0;
  }
`;

export const DateCalendarWrapper = styled.div`
  width: 41.25rem;
  display: flex;
  justify-content: space-between;

  .react-calendar {
    width: 20rem;
    height: 17.875rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--black-100);

    .react-calendar__navigation {
      width: 17rem;
      display: flex;
      justify-content: space-between;
      margin: 1rem 0 1.1875rem 0;
    }

    .react-calendar__navigation__label {
      border: none;
      background-color: var(--white-main);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--black-700);
    }

    .react-calendar__navigation__arrow {
      border: none;
      background-color: var(--white-main);
    }

    .react-calendar__month-view__weekdays {
      width: 18rem;
    }

    .react-calendar__month-view__weekdays__weekday {
      color: var(--black-500);
      text-align: center;
      margin-bottom: 1rem;

      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__month-view__days {
      width: 18rem;
      height: 11.25rem;
    }

    .react-calendar__tile {
      width: 1.75rem;
      height: 1.75rem;
      border: none;
      background-color: var(--white-main);
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: var(--black-400);
    }
  }
`;

export const DateInput = styled.div`
  width: 20rem;
  height: 2.625rem;
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid var(--black-100);
  padding: 0.75rem 1rem;
  justify-content: space-between;

  input {
    border: none;
    outline: none;

    &::placeholder {
      color: var(--black-400);
      font-family: Pretendard;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
`;
