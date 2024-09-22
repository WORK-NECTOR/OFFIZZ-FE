// Modal.styled.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 23.25rem;
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--Greyscale-100, #e9e9e9);
  background: var(--Greyscale-White, #fff);

  /* shadow-48 */
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.05);
`;
export const ModalImage = styled.img`
  width: 15rem;
  height: 15rem;
`;
export const ModalButton = styled.img`
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-main, #498df2);
`;
