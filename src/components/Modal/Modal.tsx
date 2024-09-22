// Modal.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import {
  ModalButton,
  ModalButtonClose,
  ModalButtonWrapepr,
  ModalContainer,
  ModalImage,
  Overlay,
} from './Modal.styled';
import { useRouter } from 'next/navigation';

interface TodoContent {
  title: string;
  image?: string | StaticImageData;
  buttonName: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TodoContent;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  const router = useRouter();
  const onClickStart = () => {
    onClose()
    router.push('/focus');
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
          {content.buttonName == '시작하기' && (
            <ModalButtonWrapepr>
                <ModalButtonClose onClick={onClose}>취소</ModalButtonClose>
                <ModalButton onClick={onClickStart}>{content.buttonName}</ModalButton>
            </ModalButtonWrapepr>
            
          )}
          {content.buttonName == '확인' && (
            <ModalButton onClick={onClose}>{content.buttonName}</ModalButton>
          )}
        </>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
