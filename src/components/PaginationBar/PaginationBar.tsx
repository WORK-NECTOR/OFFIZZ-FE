import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationBarContainer } from './PaginationBar.styled';
import { PaginationBarProps } from '../../types/pagination.type';

function PaginationBar(props: PaginationBarProps) {
  const { totalPage, curPage, setPage } = props;

  return (
    <PaginationBarContainer>
      <Pagination
        count={totalPage}
        defaultPage={1}
        page={curPage}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          setPage(value);
        }}
      />
    </PaginationBarContainer>
  );
}

export default PaginationBar;
