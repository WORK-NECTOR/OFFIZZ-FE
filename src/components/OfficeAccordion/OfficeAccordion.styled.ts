import styled from 'styled-components';

export const OfficeAccordionContainer = styled.div`
  display: flex;
  width: 73%;
  height: 3.5rem;
  border: 1px solid var(--black-100);
  border-radius: 1rem;
  align-items: center;

  #core-info-container {
    display: flex;
  }

  #badge-container {
    display: flex;
    gap: 1rem;
  }

  #price-info-container {
    display: flex;

    #accordion-down-arrow {
      width: 0.875rem;
      height: 0.4375rem;
    }
  }
`;
