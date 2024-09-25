import styled from 'styled-components';
import { SortMethod } from '@/types/titleDesc.type';

export const TitleDescContainer = styled.div<{
  $sort: SortMethod;
  $titleSize: string;
  $descSize: string;
}>`
  white-space: pre;
  text-align: ${(props) => (props.$sort === 'left' ? 'left' : 'center')};

  h2 {
    font-size: ${(props) => props.theme.recap || props.$titleSize || '2rem'};
    margin-bottom: 1.25rem;
  }

  p {
    font-size: ${(props) => props.$descSize || '1.25rem'};
    color: var(--desc-gray);
    font-weight: ${(props) => props.theme.recap};
    font-family: ${(props) => props.theme.recap};
  }
`;
