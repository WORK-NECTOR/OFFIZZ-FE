import { useEffect } from 'react';
import Image from 'next/image';
import ic_recap from 'public/workation-fizz-retrospect.png';
import { useRouter } from 'next/navigation';
import { RecapEndContainer } from './RecapEnd.styled';
import TitleLine from '../TitleLine';
import useStepstore from '@/store/useStepStore';

function RecapEnd() {
  const router = useRouter();
  const { step } = useStepstore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 9) router.push('/recap');
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RecapEndContainer>
      <TitleLine title="offizz" />
      <Image id="recap-img" src={ic_recap} alt="리캡 캐릭터 이미지" />
      <div id="recap-end-text">이번 워케이션도 수고 많았어요!</div>
      <div id="recap-guide-msg">잠시 후 리캡 페이지로 자동으로 이동합니다</div>
    </RecapEndContainer>
  );
}

export default RecapEnd;
