import ProgressBar from '@/components/Bar/ProgressBar';
import {
  BtnContainer,
  CoreTimeContainer,
  CoreTimeContents,
  CoreTimeInput,
  TimeInput,
  TimeInputContainer,
} from './OnboardingCoreTime.styled';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import TitleDesc from '@/components/TitleDesc';
import TimeRange from '@/components/TimeRange';
import BackButton from '@/components/Button/BackButton';
import BasicButton from '@/components/Button/BasicButton';
import useStepstore from '@/store/useStepStore';
import useOnboardingStore from '@/store/useOnboardingStore';
import { useEffect, useState } from 'react';
import { TimeRangeType, TimeFormat } from '@/types/timeRange.type';

function OnboardingCoreTime() {
  const { incrementStep, decrementStep } = useStepstore();
  const { coreTimeStart, coreTimeEnd, setCoreTimeStart, setCoreTimeEnd } =
    useOnboardingStore();
  const [coreTime, setCoreTime] = useState<TimeRangeType>({
    from: coreTimeStart || '09:00',
    to: coreTimeEnd || '16:00',
    activity: 'Core Time',
  });

  useEffect(() => {
    setCoreTime({
      from: coreTimeStart || '09:00',
      to: coreTimeEnd || '16:00',
      activity: 'Core Time',
    });
  }, [coreTimeStart, coreTimeEnd]);

  function isTimeFormat(value: string): value is TimeFormat {
    const timeFormatRegex = /^\d{1,2}:\d{1,2}$/;
    return timeFormatRegex.test(value);
  }

  return (
    <CoreTimeContainer>
      <ProgressBar width="41.25rem" current={4} total={8} />
      <CoreTimeContents>
        <CoreTimeInput>
          <TitleDesc
            title={ONBOARDING_DESC.coreTimeTitle}
            desc={ONBOARDING_DESC.coreTimeDesc}
            sort="left"
            titleSize="1.5rem"
            descSize="0.875rem"
          />
          <TimeInputContainer>
            <TimeInput>
              <input
                type="text"
                placeholder="09:00"
                onChange={(e) => {
                  const inputValue = e.currentTarget.value;
                  if (isTimeFormat(inputValue)) {
                    setCoreTimeStart(inputValue);
                  }
                }}
              />
              <p>{ONBOARDING_DESC.fromText}</p>
            </TimeInput>
            <TimeInput>
              <input
                type="text"
                placeholder="16:00"
                onChange={(e) => {
                  const inputValue = e.currentTarget.value;
                  if (isTimeFormat(inputValue)) {
                    setCoreTimeEnd(inputValue);
                  }
                }}
              />
              <p>{ONBOARDING_DESC.toText}</p>
            </TimeInput>
          </TimeInputContainer>
          <BtnContainer>
            <BackButton clickHandler={decrementStep} />
            <BasicButton
              btnText={ONBOARDING_DESC.nextBtn}
              btnType="full"
              btnColor={
                coreTimeStart && coreTimeEnd
                  ? 'var(--blue-main)'
                  : 'var(--black-50)'
              }
              textColor={
                coreTimeStart && coreTimeEnd
                  ? 'var(--white-main)'
                  : 'var(--black-300)'
              }
              btnHeight="2.5rem"
              padding="0.5rem 1rem"
              fontSize="1rem"
              clickHandler={
                coreTimeStart && coreTimeEnd ? incrementStep : () => {}
              }
            />
          </BtnContainer>
        </CoreTimeInput>
        <TimeRange timeArr={[coreTime]} length="short" />
      </CoreTimeContents>
    </CoreTimeContainer>
  );
}

export default OnboardingCoreTime;
