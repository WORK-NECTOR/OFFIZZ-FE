import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5.0625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  h1 {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }
`;

export const HeaderMenuContainer = styled.ul`
  width: 60%;
  height: 1.82rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const HeaderMenu = styled.li<{ $isSelected: boolean }>`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) =>
    props.$isSelected ? 'var(--main-black)' : 'var(--inactive-gray)'};
`;
