import { HEADER_TEXT } from '@/constants/header';
import {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuContainer,
} from './Header.styled';
import useHeaderMenuStore from '@/store/useMenuStore';
import { HeaderTextUnion } from '@/types/header.type';

function Header() {
  const selectedMenu = useHeaderMenuStore((state) => state.selectedMenu);
  const selectMenu = useHeaderMenuStore((state) => state.setSelectedMenu);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as HeaderTextUnion;
    selectMenu(text);
  };

  return (
    <HeaderContainer>
      <h1>{HEADER_TEXT.appName}</h1>
      <HeaderMenuContainer>
        <HeaderMenu
          $isSelected={selectedMenu === HEADER_TEXT.home}
          onClick={handleClick}
        >
          {HEADER_TEXT.home}
        </HeaderMenu>
        <HeaderMenu
          $isSelected={selectedMenu === HEADER_TEXT.recommendation}
          onClick={handleClick}
        >
          {HEADER_TEXT.recommendation}
        </HeaderMenu>
        <HeaderMenu
          $isSelected={selectedMenu === HEADER_TEXT.recap}
          onClick={handleClick}
        >
          {HEADER_TEXT.recap}
        </HeaderMenu>
      </HeaderMenuContainer>
      <button type="button">{HEADER_TEXT.start}</button>
    </HeaderContainer>
  );
}

export default Header;
