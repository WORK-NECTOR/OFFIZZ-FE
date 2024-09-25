import styled from 'styled-components';

export const CoreTimeContainer = styled.div``;

export const CoreTimeContents = styled.div`
  width: 100%;
  height: 26.875rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const CoreTimeInput = styled.div`
  height: 26.625rem;
  position: relative;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
`;

export const TimeInput = styled.div`
  width: 20rem;
  height: 2.625rem;
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid var(--black-100);
  padding: 0.75rem 1rem;
  justify-content: space-between;

  input {
    border: none;
    outline: none;

    &::placeholder {
      color: var(--black-400);
      font-family: Pretendard;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const TimeInputContainer = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
