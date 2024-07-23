import styled from 'styled-components';
import { TextState } from '@/types/statefulTitleDesc.type';

export const StatefulTitleDescContainer = styled.div<{ $state: TextState }>`
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #stateful-title {
    font-family: 'Figtree';
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) =>
      props.$state === 'active' ? 'var(--blue-main)' : 'var(--black-main)'};
  }

  #stateful-desc {
    color: var(--black-400);
  }
`;
