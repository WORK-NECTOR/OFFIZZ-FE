import styled from 'styled-components';

export const OfficeAccordionContainer = styled.div`
  width: 62.5rem;
  height: auto;
`;

export const OfficeAccordionToggle = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 62rem;
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
      transition: transform 0.3s ease-in-out;
      transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'none')};
    }
  }
`;

export const OfficeAccordionContent = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  max-height: ${(props) => (props.$isOpen ? '31.25rem' : '0')};
  transition:
    max-height 0.3s ease-out,
    padding 0.3s ease-out;
  overflow: hidden;
  padding: ${(props) => (props.$isOpen ? '1rem 1.5rem' : '0')};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
