import { SearchBarProps } from '@/types/searchBar.type';
import { Fragment } from 'react';
import { SearchBarContainer } from './SearchBar.styled';
import search from '../../../../public/search.png';
import Image from 'next/image';
import { RECOMMEND_TEXT } from '@/constants/recommend';

function SearchBar(props: SearchBarProps) {
  const {
    width,
    height,
    focusColor = 'var(--black-200)',
    focusContent = Fragment,
  } = props;

  return (
    <SearchBarContainer
      $width={width}
      $height={height}
      $focusColor={focusColor}
      $focus={false}
    >
      <Image
        id="search-icon"
        src={search}
        alt="검색 돋보기 아이콘"
        width={20}
        height={20}
      />
      <input
        id="search-input"
        type="text"
        placeholder={RECOMMEND_TEXT.searchPlaceholder}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
