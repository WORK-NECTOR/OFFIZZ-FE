import Image from 'next/image';
import { RecapLoadingContainer } from './RecapLoading.styled';
import ic_recap from 'public/onboarding-character.png';

function RecapLoading() {
  return (
    <RecapLoadingContainer>
      <Image id="recap-character" src={ic_recap} alt="오피츠 캐릭터" />
    </RecapLoadingContainer>
  );
}

export default RecapLoading;
