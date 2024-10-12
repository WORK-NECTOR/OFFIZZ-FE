import React, { useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
  ModalContainer,
  ModalContent,
  Overlay,
  TodoModalSub,
  TodoTitle,
  TodoPostTitle,
  TodoPlaceInput,
  TodoWriteInput,
  TodoBtnCancel,
  TodoBtnSave,
  ModalContentSave,
  TodoPostTitleSave,
  TodoWrite,
} from './TodoModal.styled';
import chatactor from '../../../public/charactor-laptop.png';
import camera from '../../../public/camera.png';
import useAuth from '@/hook/useAuth';
import location from '../../../public/local.png';
import useTodoIdStore from '@/store/useTodoIdStore';
import useDayStore from '@/store/useSelectDay';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  todoTitle: string;
  save: boolean;
}
// eslint-disable-next-line
const TodoModal: React.FC<TodoModalProps> = ({
  isOpen,
  onClose,
  id,
  todoTitle,
  save,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null); // 선택된 파일 상태 관리
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 선택된 이미지 프리뷰 관리
  const [locate, setLocate] = useState<string>(''); // 위치 상태
  const [comment, setComment] = useState<string>(''); // 한줄평 상태
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const { getAccessToken } = useAuth();
  const { image } = useTodoIdStore();
  const { content } = useTodoIdStore();
  const { palce } = useTodoIdStore();
  const { day } = useDayStore();
  const onClickSave = () => {
    getAccessToken().then((token) => {
      const body = {
        vacationTodoId: id,
        image: '', // 기본적으로 빈 이미지 URL
        locate,
        rating: 5,
        comment,
      };

      // 선택한 이미지 파일이 있는 경우에만 이미지 업로드를 수행
      if (selectedImageFile) {
        const formData = new FormData();
        formData.append('multipartFile', selectedImageFile);

        axios
          .post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/image/upload`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            },
          )
          .then((uploadResponse) => {
            const imageUrl = uploadResponse.data;
            body.image = imageUrl; // 이미지 URL을 body에 추가한 후 최종 요청 전송

            axios
              .patch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/vacation/todo/fin/${day}`,
                body,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              )
              .then(() => {
                alert('저장 완료');
                setIsSaved(true);
              })
              .catch(() => {
                alert('다시 시도해주세요.');
              });
          })
          .catch(() => {
            alert('이미지 업로드에 실패했습니다.');
          });
      } else {
        // 선택한 이미지 파일이 없는 경우 PATCH 요청
        axios
          .patch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/vacation/todo/fin/${day}`,
            body,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(() => {
            alert('저장 완료');
            setIsSaved(true);
          })
          .catch(() => {
            alert('다시 시도해주세요.');
          });
      }
    });
  };

  const onClickCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImageFile(file); // 선택한 파일 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string); // base64로 변환된 이미지 저장
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {!isSaved && !save && (
          <>
            <TodoTitle>여행기록</TodoTitle>
            <Image src={chatactor} alt="chatactor" width={64} height={64} />
            <TodoModalSub>
              즐거운 여행이었나요?
              <br />
              다음에는 저도 데려가 주세요!
            </TodoModalSub>
            <ModalContent>
              <TodoPostTitle>🏞️ {todoTitle}</TodoPostTitle>
              <TodoPlaceInput
                placeholder="위치 입력"
                value={locate}
                onChange={(e) => setLocate(e.target.value)}
              />
              <div
                style={{ position: 'relative', width: '64px', height: '64px' }}
              >
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="selected"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: '0.5rem' }}
                  />
                ) : (
                  <Image
                    src={camera}
                    alt="camera"
                    width={64}
                    height={64}
                    onClick={onClickCamera}
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={onFileChange}
                />
              </div>
              <TodoWriteInput
                placeholder="한줄평을 입력해주세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div style={{ display: 'flex' }}>
                <TodoBtnCancel onClick={onClose}>나가기</TodoBtnCancel>
                <TodoBtnSave onClick={onClickSave}>저장</TodoBtnSave>
              </div>
            </ModalContent>
          </>
        )}
        {(save || isSaved) && (
          <ModalContentSave>
            <TodoPostTitleSave>🏞️ {todoTitle}</TodoPostTitleSave>
            <TodoPostTitle>
              <Image src={location} alt="location" width={12} height={12} />{' '}
              {locate || palce}
            </TodoPostTitle>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="selectedImage"
                width={292}
                height={292}
              />
            )}
            <TodoWrite>{comment || content}</TodoWrite>
          </ModalContentSave>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default TodoModal;
