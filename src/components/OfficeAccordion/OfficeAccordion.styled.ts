import styled from 'styled-components';

export const OfficeAccordionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 73%;
  min-height: 3.5rem;
  border: 1px solid var(--black-100);
  border-radius: 1rem;
  align-items: center;
  padding: 0 1.5rem;

  #core-info-container {
    display: flex;
    height: 1.5rem;
    align-items: center;
    gap: 1rem;

    #place-address {
      font-size: 0.875rem;
      color: var(--black-500);
    }
  }

  #badge-container {
    display: flex;
    gap: 0.5rem;
  }

  #price-info-container {
    display: flex;
    height: 1.5rem;
    align-items: center;
    gap: 1rem;

    #accordion-down-arrow {
      width: 0.875rem;
      height: 0.4375rem;
    }
  }
`;
