import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 13rem;
  background-color: var(--black-50);
  padding: 4.4375rem 11.4375rem 5.5625rem 11.4375rem;

  #logo-img {
    width: 3.125rem;
    height: 1rem;
  }
`;

export const FooterTextLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  #instagram-img {
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
  }
`;

export const FooterText = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--black-700);
`;
