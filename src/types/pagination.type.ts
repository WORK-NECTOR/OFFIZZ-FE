import { Dispatch, SetStateAction } from 'react';

export interface PaginationBarProps {
  totalPage: number;
  curPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}
