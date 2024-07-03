import styled from 'styled-components';
import { sortMethod } from '@/types/titleDesc.type';

export const TitleDescContainer = styled.div<{ $sort: sortMethod }>`
  white-space: pre;
  text-align: ${(props) => (props.$sort == 'left' ? 'left' : 'center')};

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    color: var(--desc-gray);
  }
`;
