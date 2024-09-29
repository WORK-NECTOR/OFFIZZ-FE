import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5.0625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11.4375rem;
  backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  z-index: 1;
  font-family: Figtree;

  #logo-img {
    width: 3.125rem;
    height: 1rem;
  }

  button {
    border: none;
    background-color: transparent;
    width: fit-content;
    height: 2.25rem;
    padding: 0 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderMenuContainer = styled.ul`
  width: 13.4375rem;
  height: 2.25rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: absolute;
  left: 17.8125rem;
`;

export const HeaderMenu = styled.li<{ $isSelected: boolean }>`
  width: fit-content;
  height: 2.25rem;
  padding: 0 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.$isSelected ? 'var(--black-main)' : 'var(--inactive-gray)'};
`;
