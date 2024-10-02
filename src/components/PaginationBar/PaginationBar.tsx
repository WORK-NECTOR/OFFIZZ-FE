import { Pagination } from '@mui/material';
import { PaginationContainer } from './PaginationBar.styled';
import { PaginationProps } from '@/types/pagination.type';

function PaginationBar(props: PaginationProps) {
  const { totalPage, curPage, setPage } = props;

  return (
    <PaginationContainer>
      <Pagination count={totalPage} />
    </PaginationContainer>
  );
}

export default PaginationBar;
