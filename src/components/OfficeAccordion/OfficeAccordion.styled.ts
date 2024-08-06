import styled from 'styled-components';

export const OfficeAccordionContainer = styled.div`
  width: 73%;
`;

export const OfficeAccordionToggle = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 3.5rem;
  border: 1px solid var(--black-100);
  border-radius: 1rem;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;

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
      transition: transform 0.5s ease-in-out;
      transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'none')};
    }
  }
`;

export const OfficeAccordionContent = styled.div`
  width: 100%;
`;
