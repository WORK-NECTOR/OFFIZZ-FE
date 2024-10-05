// Modal.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import {
  EndTitle,
  ModalButton,
  ModalButtonClose,
  ModalButtonConfirm,
  ModalButtonWrapepr,
  ModalContainer,
  ModalEndContainer,
  ModalImage,
  Overlay,
  Endsub,
  EndButtonCancel,
  EndButtonEnd,
} from './Modal.styled';

interface TodoContent {
  title: string;
  image?: string | StaticImageData;
  buttonName: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TodoContent;
  // eslint-disable-next-line
  todoTitle?: string;
  // eslint-disable-next-line
  time?: string;
  // eslint-disable-next-line
  id?: number;
  // eslint-disable-next-line
  end?: boolean;
}

// eslint-disable-next-line
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  content,
  todoTitle,
  time,
  id,
  end,
}) => {
  if (!isOpen) return null;
  // eslint-disable-next-line
  const router = useRouter();
  const onClickStart = () => {
    onClose();
    router.push(`/focus?title=${todoTitle}&time=${time}&id=${id}`);
  };
  const onClickConfirm = () => {
    onClose();
    router.push('/information');
  };

  const onClickEnd = () => {
    onClose();
    router.push('/information/recap');
  };
  return (
    <Overlay onClick={onClose}>
      {end === false && (
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <>
            <h2>{content.title}</h2>
            {content.image && (
              <ModalImage
                src={
                  typeof content.image === 'string'
                    ? content.image
                    : content.image.src
                }
                alt={content.title}
              />
            )}
            {content.buttonName === '시작하기' && (
              <ModalButtonWrapepr>
                <ModalButtonClose onClick={onClose}>취소</ModalButtonClose>
                <ModalButton onClick={onClickStart}>
                  {content.buttonName}
                </ModalButton>
              </ModalButtonWrapepr>
            )}
            {content.buttonName === '확인' && (
              <ModalButtonConfirm onClick={onClickConfirm}>
                {content.buttonName}
              </ModalButtonConfirm>
            )}
          </>
        </ModalContainer>
      )}
      {end && (
        <ModalEndContainer onClick={(e) => e.stopPropagation()}>
          <EndTitle>워케이션을 종료하시겠어요?</EndTitle>
          <Endsub>
            오늘은 워케이션의 마지막 날이에요.
            <br />
            워케이션을 종료하고 recap과 전체회고를 진행해보세요.
          </Endsub>
          <div style={{ display: 'flex' }}>
            <EndButtonCancel onClick={onClose}>아니요</EndButtonCancel>
            <EndButtonEnd onClick={onClickEnd}>워케이션 종료하기</EndButtonEnd>
          </div>
        </ModalEndContainer>
      )}
    </Overlay>
  );
};

export default Modal;
