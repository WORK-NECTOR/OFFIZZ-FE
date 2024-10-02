import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationBarContainer } from './PaginationBar.styled';
import { PaginationBarProps } from '../../types/pagination.type';

function PaginationBar(props: PaginationBarProps) {
  const { totalPage, curPage, setPage } = props;

  return (
    <PaginationBarContainer>
      <Pagination count={totalPage} />
    </PaginationBarContainer>
  );
}

export default PaginationBar;
