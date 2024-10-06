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
  max-height: 39.5rem;
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--Greyscale-100, #e9e9e9);
  background: var(--Greyscale-White, #fff);

  /* shadow-48 */
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.05);
`;
export const TodoTitle = styled.div`
  margin-bottom: 1rem;
  color: var(--Greyscale-Black, #000);
  text-align: center;

  /* Kor/Headline4-kor */
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
`;

export const TodoModalSub = styled.div`
  color: var(--Greyscale-700, #434343);
  text-align: center;

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;

export const ModalContent = styled.div`
  display: flex;
  padding: 1.0625rem 1rem;
  flex-direction: column;
  gap: 0.75rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid var(--Greyscale-200, #d9d9d9);
`;
export const ModalContentSave = styled.div`
  display: flex;
  padding: 1.0625rem 1rem;
  flex-direction: column;
  gap: 0.75rem;
  align-self: stretch;
`;

export const TodoPostTitle = styled.div`
  width: 100%;
  color: var(--Greyscale-Black, #000);

  /* Kor/Caption1-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 128.571% */
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--Greyscale-200, #d9d9d9);
`;
export const TodoPostTitleSave = styled.div`
  width: 100%;
  color: var(--Greyscale-Black, #000);

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
  padding-bottom: 0.5rem;
`;

export const TodoPlaceInput = styled.input`
  display: flex;
  width: 16.25rem;
  height: 2rem;
  padding: 0rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  border: 1px solid var(--Greyscale-200, #d9d9d9);
  background: var(--Greyscale-White, #fff);
`;
export const TodoWriteInput = styled.input`
  display: flex;
  height: 9rem;
  width: 100%;
  padding: 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--Greyscale-50, #f5f5f5);
  border: none;
`;
export const TodoWrite = styled.div`
  display: flex;
  height: 9rem;
  padding: 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--Greyscale-50, #f5f5f5);
  color: var(--Greyscale-Black, #000);

  /* Kor/Caption2-kor */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
`;

export const TodoBtnCancel = styled.div`
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Pink-greyish, #f9f7fc);
  color: var(--Pink-main, #f06fd4);
  text-align: center;

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;
export const TodoBtnSave = styled.div`
  display: flex;
  height: 2.25rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  border-radius: 0.75rem;
  background: var(--Pink-main, #f06fd4);
  color: var(--Greyscale-White, #fff);
  text-align: center;

  /* Kor/Body5-kor */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
`;
