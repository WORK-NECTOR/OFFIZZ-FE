import Image from 'next/image';
import { RecapLoadingContainer } from './RecapLoading.styled';
import ic_recap from 'public/onboarding-character.png';
import ic_cafe from 'public/ic-cafe.png';
import ic_vac from 'public/ic-vac.png';
import ic_nature from 'public/ic-nature.png';
// import ic_restaurant from 'public/ic-restaurant.png';
// import ic_art from 'public/ic-art.png';
// import ic_bed from 'public/ic-bed.png';
// import ic_work from 'public/ic-work.png';
// import ic_shopping from 'public/ic-shopping.png';
// import ic_laptop from 'public/ic-laptop.png';
// import ic_car from 'public/ic-car.png';
import ic_logo from 'public/offizz-logo.png';
import RotatingIcon from '../RotatingIcon';
import useUserStore from '@/store/useUserStore';
import { RECAP_DETAIL } from '@/constants/recap';

function RecapLoading() {
  const { name } = useUserStore();

  return (
    <RecapLoadingContainer>
      <div className="circle" data-size="large">
        {/* <RotatingIcon
          imgSrc={ic_bed}
          bgColor="var(--white-main)"
          wh="6rem"
          imgWh="4rem"
          radius="3rem"
          rotationStart={45}
        />
        <RotatingIcon
          imgSrc={ic_shopping}
          bgColor="var(--white-main)"
          wh="3.5rem"
          imgWh="2rem"
          radius="3rem"
          rotationStart={90}
        />
        <RotatingIcon
          imgSrc={ic_work}
          bgColor="var(--white-main)"
          wh="6rem"
          imgWh="4rem"
          radius="3rem"
          rotationStart={135}
        />
        <RotatingIcon
          imgSrc={ic_car}
          bgColor="var(--white-main)"
          wh="4.5rem"
          imgWh="2.5rem"
          radius="2.5rem"
          rotationStart={180}
        />
        <RotatingIcon
          imgSrc={ic_laptop}
          bgColor="#D4EBFF"
          wh="6rem"
          imgWh="4rem"
          radius="3rem"
          rotationStart={225}
        /> */}
        <div className="circle" data-size="medium">
          {/* <RotatingIcon
            imgSrc={ic_restaurant}
            bgColor="var(--blue-bright)"
            wh="3.5rem"
            imgWh="2rem"
            radius="1.75rem"
            rotationStart={90}
          />
          <RotatingIcon
            imgSrc={ic_art}
            bgColor="var(--white-main)"
            wh="3.5rem"
            imgWh="2.5rem"
            radius="1.75rem"
            rotationStart={180}
          /> */}
          <div className="circle" data-size="small">
            <RotatingIcon
              imgSrc={ic_vac}
              bgColor="var(--pink-bright)"
              wh="1.75rem"
              imgWh="0.9375rem"
              radius="8.8rem"
              rotationStart={90}
            />
            <RotatingIcon
              imgSrc={ic_cafe}
              bgColor="var(--white-main)"
              wh="1.75rem"
              imgWh="1.0625rem"
              radius="8.8rem"
              rotationStart={150}
            />
            <RotatingIcon
              imgSrc={ic_nature}
              bgColor="var(--white-main)"
              wh="1.75rem"
              imgWh="1.25rem"
              radius="8.8rem"
              rotationStart={210}
            />
            <Image id="recap-character" src={ic_recap} alt="오피츠 캐릭터" />
          </div>
        </div>
      </div>
      <Image id="logo-img" src={ic_logo} alt="로고 이미지" />
      <p id="loading-text">{name + RECAP_DETAIL.loadingText}</p>
    </RecapLoadingContainer>
  );
}

export default RecapLoading;
