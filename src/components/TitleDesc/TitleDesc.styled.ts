import styled from 'styled-components';
import { SortMethod } from '@/types/titleDesc.type';

export const TitleDescContainer = styled.div<{ $sort: SortMethod }>`
  white-space: pre;
  text-align: ${(props) => (props.$sort === 'left' ? 'left' : 'center')};

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.25rem;
    color: var(--desc-gray);
  }
`;
export const RecapTitleDescContainer = styled(TitleDescContainer)`
  h2 {
font-family: Figtree;
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: 3.5rem;
  }
  p {
    color: var(--Greyscale-400, #9D9D9D);
font-family: Pretendard;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
  }
`;