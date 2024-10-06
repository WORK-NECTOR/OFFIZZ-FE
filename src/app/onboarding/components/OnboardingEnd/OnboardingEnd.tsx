import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BtnContainer,
  EndContainer,
  EndTextWrapper,
} from './OnboardingEnd.styled';
import end_character from '../../../../../public/onboarding-end-character.png';
import TitleDesc from '@/components/TitleDesc';
import { ONBOARDING_DESC } from '@/constants/onboarding';
import BasicButton from '@/components/Button/BasicButton';
import useStepstore from '@/store/useStepStore';
import BackButton from '@/components/Button/BackButton';
import useOnboardingStore from '@/store/useOnboardingStore';
import useAuth from '@/hook/useAuth';
import { useOnboardingQuery } from '@/services/onboarding/useOnboardingQuery';
import useWorkationStore from '@/store/useWorkationStore';

function OnboardingEnd() {
  const { decrementStep } = useStepstore();
  const {
    reason,
    fromDate: startDate,
    toDate: endDate,
    place: locate,
    address,
    coreTimeStart: startCoreTime,
    coreTimeEnd: endCoreTime,
    travel: vacationKeywords,
    workplace: workKeywords,
    visitPlace,
    goal,
  } = useOnboardingStore();
  const { setWorkationId } = useWorkationStore();
  const [token, setToken] = useState('');
  const { getAccessToken } = useAuth();
  const router = useRouter();
  const { data, refetch } = useOnboardingQuery({
    reason,
    locate,
    address,
    startDate,
    endDate,
    startCoreTime,
    endCoreTime,
    workKeywords,
    vacationKeywords,
    goal,
    bucketlists: visitPlace.map((place) => ({
      name: place.place_name,
      address: place.address_name,
    })),
    token,
  });

  useEffect(() => {
    getAccessToken().then((tkn) => {
      if (tkn) setToken(tkn);
    });
  }, []);

  const clickHandler = () => {
    if (token) {
      refetch();

      if (data && data.code === 200) {
        setWorkationId(data.workationId);
        router.push('/information');
      }
    }
  };

  return (
    <EndContainer>
      <Image src={end_character} alt="온보딩 끝 캐릭터" />
      <EndTextWrapper>
        <TitleDesc
          title={ONBOARDING_DESC.endTitle}
          desc={ONBOARDING_DESC.endDesc}
          sort="left"
          titleSize="2.5rem"
          descSize="1rem"
        />
        <BtnContainer>
          <BackButton clickHandler={decrementStep} />
          <BasicButton
            btnText={ONBOARDING_DESC.nextBtn}
            btnType="full"
            btnColor="var(--blue-main)"
            textColor="var(--white-main)"
            btnHeight="2.5rem"
            padding="0.5rem 1rem"
            fontSize="1rem"
            clickHandler={clickHandler} // 추후 api 연결 및 링크 이동
          />
        </BtnContainer>
      </EndTextWrapper>
    </EndContainer>
  );
}

export default OnboardingEnd;
