import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import {
  BtnContainer,
  DateCalendarWrapper,
  DateInput,
  DateInputContainer,
  PeriodContainer,
} from './OnboardingPeriod.styled';
import ProgressBar from '@/components/Bar/ProgressBar';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';
import useOnboardingStore from '@/store/useOnboardingStore';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function OnboardingPeriod() {
  const [today, setToday] = useState('');
  const { fromDate, setFromDate, toDate, setToDate } = useOnboardingStore();
  const { incrementStep, decrementStep } = useStepstore();

  function formatDate(date: Date | null): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  function setDateRange(value: Value) {
    if (Array.isArray(value)) {
      // 날짜 범위 선택
      const [start, end] = value;
      setFromDate(formatDate(start));
      setToDate(formatDate(end));
    } else {
      // 단일 날짜 선택 🐛
      const formattedDate = formatDate(value);
      setFromDate(formattedDate);
      setToDate(formattedDate);
    }
  }

  useEffect(() => {
    const rawToday = new Date();
    const formattedToday = formatDate(rawToday);

    setToday(formattedToday);
  }, []);

  return (
    <PeriodContainer>
      <ProgressBar width="41.25rem" current={2} total={8} />
      <h2>{ONBOARDING_DESC.periodTitle}</h2>
      <DateCalendarWrapper>
        <DateInputContainer>
          <DateInput>
            <input type="text" placeholder={today} defaultValue={fromDate} />
            <p>{ONBOARDING_DESC.fromText}</p>
          </DateInput>
          <DateInput>
            <input type="text" placeholder={today} defaultValue={toDate} />
            <p>{ONBOARDING_DESC.toText}</p>
          </DateInput>
        </DateInputContainer>
        <Calendar
          prev2Label={null}
          next2Label={null}
          calendarType="gregory"
          formatDay={(locale, date) => String(date.getDate())}
          returnValue="range"
          selectRange
          // eslint-disable-next-line react/jsx-no-bind
          onChange={setDateRange}
        />
      </DateCalendarWrapper>
      <BtnContainer>
        <BackButton clickHandler={decrementStep} />
        <BasicButton
          btnText={ONBOARDING_DESC.nextBtn}
          btnType="full"
          btnColor={fromDate && toDate ? 'var(--blue-main)' : 'var(--black-50)'}
          textColor={
            fromDate && toDate ? 'var(--white-main)' : 'var(--black-300)'
          }
          btnHeight="2.5rem"
          padding="0.5rem 1rem"
          fontSize="1rem"
          clickHandler={fromDate && toDate ? incrementStep : () => {}}
        />
      </BtnContainer>
    </PeriodContainer>
  );
}

export default OnboardingPeriod;
