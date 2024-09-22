// Modal.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import {
  ModalButton,
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
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

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
            <ModalButton onClick={onClose}>{content.buttonName}</ModalButton>
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
