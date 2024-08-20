import { SearchBarProps } from '@/types/searchBar.type';
import { Fragment } from 'react';

function SearchBar(props: SearchBarProps) {
  const {
    width,
    height,
    focusColor = 'var(--black-200)',
    focusContent = Fragment,
  } = props;

  return <div>Search</div>;
}

export default SearchBar;
