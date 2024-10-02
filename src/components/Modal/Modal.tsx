// Modal.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ModalButton,
  ModalButtonClose,
  ModalButtonConfirm,
  ModalButtonWrapepr,
  ModalContainer,
  ModalImage,
  Overlay,
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
}

// eslint-disable-next-line
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  content,
  todoTitle,
  time,
}) => {
  if (!isOpen) return null;
  // eslint-disable-next-line
  const router = useRouter();
  const onClickStart = () => {
    onClose();
    router.push(`/focus?title=${todoTitle}&time=${time}`);
  };
  const onClickConfirm = () => {
    onClose();
    router.push('/information');
  };
  return (
    <Overlay onClick={onClose}>
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
    </Overlay>
  );
};

export default Modal;
