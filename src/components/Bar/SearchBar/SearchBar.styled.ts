import styled from 'styled-components';

export const SearchBarResultContainer = styled.div`
  width: 41.25rem;
  position: relative;
  overflow: visible;
`;

export const SearchBarContainer = styled.div<{
  $width: string;
  $height: string;
  $focusColor: string;
  $focus: boolean;
}>`
  width: ${(props) => props.$width || '41.25rem'};
  height: ${(props) => props.$height || '3.25rem'};
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 3rem;
  border: 1px solid var(--black-200);
  background: var(--white-main);

  #search-icon {
    cursor: pointer;
  }

  #search-input {
    width: 38rem;
    height: 1.75rem;
    border: none;
    outline: none;
    font-size: 1rem;

    ::placeholder {
      font-family: Pretendard;
      color: var(--black-300);
    }
  }
`;

export const SearchResultContainer = styled.div`
  width: 41.25rem;
  height: 13rem;
  border-radius: 0.5rem;
  border: 1px solid var(--black-100);
  background-color: var(--white-main);
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 3.25rem;
`;
