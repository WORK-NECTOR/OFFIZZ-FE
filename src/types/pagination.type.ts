import { Dispatch, SetStateAction } from 'react';

export interface PaginationProps {
  totalPage: number;
  curPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}
