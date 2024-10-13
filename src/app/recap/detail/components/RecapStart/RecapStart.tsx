import Image from 'next/image';
import ic_loc from 'public/ic-location.png';
import { useEffect } from 'react';
import { TOP_MAIN } from '@/constants/main';
import TitleLine from '../TitleLine';
import {
  RecapStartBottom,
  RecapStartContainer,
  RecapStartTop,
} from './RecapStart.styled';
import { RECAP_DETAIL } from '@/constants/recap';
import useWorkationStore from '@/store/useWorkationStore';
import useStepstore from '@/store/useStepStore';

function RecapStart() {
  const { name, startDate, endDate } = useWorkationStore();
  const { step, incrementStep } = useStepstore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 1) incrementStep();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RecapStartContainer>
      <TitleLine title={TOP_MAIN.name} />
      <RecapStartTop>
        <p id="recap-title">{RECAP_DETAIL.recapCardTitle}</p>
        <p id="recap-desc">{RECAP_DETAIL.recapCardDesc}</p>
      </RecapStartTop>
      <RecapStartBottom>
        <div id="workation-place-wrapper">
          <Image id="workation-place-ic" src={ic_loc} alt="위치 아이콘" />
          <p id="workation-place">{name}</p>
        </div>
        <p id="workation-date">{`${startDate.replaceAll('-', '.')} - ${endDate.replaceAll('-', '.')}`}</p>
      </RecapStartBottom>
    </RecapStartContainer>
  );
}

export default RecapStart;
