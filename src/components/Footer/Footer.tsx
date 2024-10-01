import Image from 'next/image';
import ic_logo from 'public/offizz-logo.png';
import ic_insta from 'public/instagram-logo.png';
import { FooterContainer, FooterTextLogo, FooterText } from './Footer.styled';
import { FOOTER_TEXT } from '@/constants/footer';

function Footer() {
  return (
    <FooterContainer>
      <Image src={ic_logo} alt="오피츠 로고" id="logo-img" />
      <FooterTextLogo>
        <FooterText>
          <p>{FOOTER_TEXT.contestText}</p>
          <p>{FOOTER_TEXT.teamText}</p>
        </FooterText>
        <a href={FOOTER_TEXT.link} target="_blank" rel="noreferrer">
          <Image src={ic_insta} alt="인스타그램 로고" id="instagram-img" />
        </a>
      </FooterTextLogo>
    </FooterContainer>
  );
}

export default Footer;
