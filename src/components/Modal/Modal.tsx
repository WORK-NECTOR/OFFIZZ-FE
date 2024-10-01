// Modal.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import {
  ModalButton,
  ModalButtonClose,
  ModalButtonConfirm,
  ModalButtonWrapepr,
  ModalContainer,
  ModalImage,
  Overlay,
} from './Modal.styled';
import { useRouter } from 'next/navigation';
import useDayStore from '@/store/useSelectDay';

interface TodoContent {
  title: string;
  image?: string | StaticImageData;
  buttonName: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TodoContent;
  todoTitle?:string;
  time?:string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content,todoTitle,time }) => {
  const { day} = useDayStore();
  if (!isOpen) return null;
  const router = useRouter();
  const onClickStart = () => {
    onClose()
    router.push(`/focus?title=${todoTitle}&time=${time}&day=${day}`);
  };
  const onClickConfirm = () => {
    onClose()
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
          {content.buttonName == '시작하기' && (
            <ModalButtonWrapepr>
                <ModalButtonClose onClick={onClose}>취소</ModalButtonClose>
                <ModalButton onClick={onClickStart}>{content.buttonName}</ModalButton>
            </ModalButtonWrapepr>
            
          )}
          {content.buttonName == '확인' && (
            <ModalButtonConfirm onClick={onClickConfirm}>{content.buttonName}</ModalButtonConfirm>
          )}
        </>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
