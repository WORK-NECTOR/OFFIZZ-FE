import styled from 'styled-components';

export const VisitContainer = styled.div`
  position: relative;
  height: 31.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RemovableBadgeContainer = styled.div`
  width: 41.25rem;
  max-height: 15rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const RemovableBadge = styled.div`
  width: fit-content;
  height: 2.125rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  gap: 0.5rem;
  background-color: var(--black-50);
  border-radius: 1.5rem;
  color: var(--black-700);
  align-items: center;

  .badge-img {
    width: 0.75rem;
    height: 0.75rem;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;

  #skip-btn {
    border: none;
    font-size: 0.75rem;
    font-family: Pretendard;
    text-decoration: underline;
    text-underline-offset: 1px;
    color: var(--blue-main);
    background-color: transparent;
    cursor: pointer;
  }
`;
