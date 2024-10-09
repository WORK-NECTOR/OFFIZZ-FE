import Image from 'next/image';
import { RecapLoadingContainer } from './RecapLoading.styled';
import ic_recap from 'public/onboarding-character.png';

function RecapLoading() {
  return (
    <RecapLoadingContainer>
      <div className="circle" data-size="large">
        <div className="circle" data-size="medium">
          <div className="circle" data-size="small">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <Image id="recap-character" src={ic_recap} alt="오피츠 캐릭터" />
          </div>
        </div>
      </div>
    </RecapLoadingContainer>
  );
}

export default RecapLoading;
