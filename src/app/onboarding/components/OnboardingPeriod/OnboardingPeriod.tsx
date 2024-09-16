import { ONBOARDING_DESC } from '@/constants/onboarding';
import {
  BtnContainer,
  DateCalendarWrapper,
  DateInput,
  DateInputContainer,
  PeriodContainer,
} from './OnboardingPeriod.styled';
import ProgressBar from '@/components/Bar/ProgressBar';
import Calendar from 'react-calendar';
import BackButton from '@/components/Button/BackButton';
import useStepstore from '@/store/useStepStore';
import BasicButton from '@/components/Button/BasicButton';
import { useEffect, useState } from 'react';
import useOnboardingStore from '@/store/useOnboardingStore';

function OnboardingPeriod() {
  const [today, setToday] = useState('');
  const { fromDate, setFromDate, toDate, setToDate } = useOnboardingStore();
  const { incrementStep, decrementStep } = useStepstore();

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}.${month}.${day}`;
    setToday(formattedDate);
  }, []);

  return (
    <PeriodContainer>
      <ProgressBar width="41.25rem" current={2} total={8} />
      <h2>{ONBOARDING_DESC.periodTitle}</h2>
      <DateCalendarWrapper>
        <DateInputContainer>
          <DateInput>
            <input type="text" placeholder={today} />
            <p>{ONBOARDING_DESC.fromText}</p>
          </DateInput>
          <DateInput>
            <input type="text" placeholder={today} />
            <p>{ONBOARDING_DESC.toText}</p>
          </DateInput>
        </DateInputContainer>
        <Calendar
          prev2Label={null}
          next2Label={null}
          calendarType="gregory"
          formatDay={(locale, date) => String(date.getDate())}
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