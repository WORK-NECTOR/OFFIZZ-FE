import { HEADER_TEXT } from '@/constants/header';
import {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuContainer,
} from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <h1>{HEADER_TEXT.appName}</h1>
      <HeaderMenuContainer>
        <HeaderMenu>{HEADER_TEXT.home}</HeaderMenu>
        <HeaderMenu>{HEADER_TEXT.recommendation}</HeaderMenu>
        <HeaderMenu>{HEADER_TEXT.recap}</HeaderMenu>
      </HeaderMenuContainer>
      <button>{HEADER_TEXT.start}</button>
    </HeaderContainer>
  );
}

export default Header;
