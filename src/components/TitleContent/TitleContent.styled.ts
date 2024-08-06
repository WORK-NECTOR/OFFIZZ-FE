import styled from 'styled-components';

export const TitleContentContainer = styled.div`
  width: 59.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  #tc-title {
    width: 100%;
    height: 1.375rem;
  }

  #tc-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    color: var(--black-600);
  }
`;
