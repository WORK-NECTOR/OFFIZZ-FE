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
  min-height: 23.25rem;
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--Greyscale-100, #e9e9e9);
  background: var(--Greyscale-White, #fff);
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.05);
`;

export const ModalEndContainer = styled.div`
  display: flex;
  width: 24.25rem;
  padding: 2rem 2.3rem;
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
export const ModalButton = styled.div`
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-main, #498df2);
  color: var(--Greyscale-White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;
export const ModalButtonClose = styled.div`
  display: flex;
  height: 2.5rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-greyish, #f4f7f9);
  color: var(--Blue-main, #498df2);
  text-align: center;
  margin-right: 0.5rem;

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;
export const ModalButtonWrapepr = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  text-align: center;
`;
export const ModalButtonConfirm = styled.div`
  display: flex;
  width: 18.25rem;
  padding: 0.5rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-main, #498df2);
  color: var(--Greyscale-White, #fff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
`;
export const EndTitle = styled.div`
  margin-bottom: 0.5rem;
  color: var(--Greyscale-Black, #000);
  text-align: center;

  /* Kor/Body3-kor */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 133.333% */
`;
export const Endsub = styled.div`
  align-self: stretch;
  color: var(--Greyscale-700, #434343);
  text-align: center;

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;
export const EndButtonCancel = styled.div`
  width: 9.375rem;
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-greyish, #f4f7f9);
  color: var(--Blue-main, #498df2);
  text-align: center;

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;

export const EndButtonEnd = styled.div`
  margin-left: 0.5rem;
  width: 9.375rem;
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Blue-main, #498df2);
  color: var(--Greyscale-White, #fff);
  text-align: center;

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;
