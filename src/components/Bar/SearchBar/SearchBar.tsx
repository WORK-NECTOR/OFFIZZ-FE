import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { SearchBarProps } from '@/types/searchBar.type';
import {
  SearchBarContainer,
  SearchBarResultContainer,
  SearchResultContainer,
} from './SearchBar.styled';
import search from '../../../../public/search.png';
import { RECOMMEND_TEXT } from '@/constants/recommend';
import useSearchStore from '@/store/useSearchStore';
import { SearchPlaceType } from '@/types/searchPlace.type';
import LocationItem from '@/components/LocationItem';
import useOnboardingStore from '@/store/useOnboardingStore';

function SearchBar(props: SearchBarProps) {
  // 추후 ① 카카오 맵 api ② 우리 서버 api 분리할 예정
  const {
    width,
    height,
    focusColor = 'var(--black-200)',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    focusContent = Fragment,
    placeholder = RECOMMEND_TEXT.searchPlaceholder,
  } = props;
  const { keyword, setKeyword } = useSearchStore();
  const { place, setPlace } = useOnboardingStore();
  const [searchResult, setSearchResult] = useState<Array<SearchPlaceType>>([]);
  const [resultOpen, isResultOpen] = useState(false);

  useEffect(() => {
    if (keyword.length > 0) isResultOpen(true);
    else isResultOpen(false);
  }, [keyword]);

  useEffect(() => {
    kakao.maps.load(() => {
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(keyword, (data, status) => {
        if (status) {
          const requiredArr = data.map(({ address_name, place_name }) => ({
            address_name,
            place_name,
          }));
          setSearchResult(requiredArr);
        }
      });
    });
  }, [keyword]);

  return (
    <SearchBarResultContainer>
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
          placeholder={placeholder}
          value={place || ''}
          onChange={(e) => {
            setKeyword(e.currentTarget.value);
            setPlace(e.currentTarget.value);
          }}
        />
      </SearchBarContainer>
      {resultOpen && (
        <SearchResultContainer>
          {searchResult.map((el, idx) => (
            <LocationItem
              // eslint-disable-next-line react/prop-types, react/no-array-index-key
              key={idx}
              address_name={el.address_name}
              place_name={el.place_name}
              setPlace={(value) => {
                setPlace(value);
                setSearchResult([]);
                setKeyword('');
              }}
            />
          ))}
        </SearchResultContainer>
      )}
    </SearchBarResultContainer>
  );
}

export default SearchBar;
