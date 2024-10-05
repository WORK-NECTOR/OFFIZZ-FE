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
} from './TodoModal.styled';
import chatactor from '../../../public/charactor-laptop.png';
import camera from '../../../public/camera.png';
import useAuth from '@/hook/useAuth';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}
// eslint-disable-next-line
const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose, id }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 선택된 이미지 상태 관리
  const [locate, setLocate] = useState<string>(''); // 위치 상태
  const [comment, setComment] = useState<string>(''); // 한줄평 상태
  const { getAccessToken } = useAuth();

  const onClickSave = () => {
    getAccessToken()
      .then((token) => {
        const body = {
          vacationTodoId: id,
          image: selectedImage,
          locate,
          rating: 5,
          comment,
        };

        axios
          .patch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/vacation/todo/fin/1`,
            body,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((response) => {
            onClose(); // 저장 후 모달 닫기
            window.location.reload();
          })
          .catch((error) => {
            // eslint-disable-next-line
            alert('다시 시도해주세요.');
          });
      })
      .catch((error) => {
        // eslint-disable-next-line
        alert('다시 시도해주세요.');
      });
  };

  const onClickCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 입력 클릭
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string); // 선택한 이미지를 Base64로 설정
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 변환
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TodoTitle>여행기록</TodoTitle>
        <Image src={chatactor} alt="chatactor" width={64} height={64} />
        <TodoModalSub>
          즐거운 여행이었나요?
          <br />
          다음에는 저도 데려가 주세요!
        </TodoModalSub>
        <ModalContent>
          <TodoPostTitle>🏞️ ddddddd</TodoPostTitle>
          <TodoPlaceInput
            placeholder="위치 입력"
            value={locate} // 위치 상태를 설정
            onChange={(e) => setLocate(e.target.value)} // 입력 시 상태 업데이트
          />
          <div style={{ position: 'relative', width: '64px', height: '64px' }}>
            {selectedImage ? ( // 선택된 이미지가 있으면 표시
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
              accept="image/*" // 이미지 파일만 허용
              style={{ display: 'none' }} // 파일 입력 숨기기
              onChange={onFileChange} // 파일 변경 이벤트 처리
            />
          </div>
          <TodoWriteInput
            placeholder="한줄평을 입력해주세요."
            value={comment} // 한줄평 상태를 설정
            onChange={(e) => setComment(e.target.value)} // 입력 시 상태 업데이트
          />
          <div style={{ display: 'flex' }}>
            <TodoBtnCancel onClick={onClose}>나가기</TodoBtnCancel>
            <TodoBtnSave onClick={onClickSave}>저장</TodoBtnSave>
          </div>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default TodoModal;
