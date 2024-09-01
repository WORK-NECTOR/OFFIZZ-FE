import { HEADER_TEXT } from '@/constants/header';
import {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuContainer,
} from './Header.styled';
import useHeaderMenuStore from '@/store/useMenuStore';
import { HeaderTextUnion } from '@/types/header.type';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();
  const { selectedMenu, setSelectedMenu } = useHeaderMenuStore.getState();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as HeaderTextUnion;
    setSelectedMenu(text);
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
      <button
        type="button"
        onClick={() => {
          router.push('/login');
        }}
      >
        {HEADER_TEXT.login}
      </button>
    </HeaderContainer>
  );
}

export default Header;
