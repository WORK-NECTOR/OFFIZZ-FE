import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
  RecodeWapper,
  RecodeBox,
  RecodeImg,
  RecodeTitle,
  RecodeSub,
  RecodeComment,
} from './Record.styled';
import local from '../../../../../public/local.png';
import useAuth from '@/hook/useAuth';
import useActivityStore from '@/store/useSelectTodo';
import useTodoIdStore from '@/store/useTodoIdStore';

interface RecodeItem {
  vacationTodoId: number;
  title: string;
  locate: string;
  comment: string;
  image: string;
}
interface RecodeProps {
  onClickVacation: () => void;
}
function Recode({ onClickVacation }: RecodeProps) {
  const [recodeData, setRecordData] = useState<RecodeItem[]>([]);
  const { getAccessToken } = useAuth();
  const { setActivity } = useActivityStore();
  const { setId } = useTodoIdStore();
  const { setContent } = useTodoIdStore();
  const { setImage } = useTodoIdStore();
  const { setPlace } = useTodoIdStore();
  useEffect(() => {
    const fetchRecords = () => {
      getAccessToken().then((token) => {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/record/vacation/1`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((response) => {
            setRecordData(response.data);
          })
          .catch((error) => {});
      });
    };

    fetchRecords();
  }, []);

  const truncateComment = (comment: string) =>
    comment.length > 18 ? `${comment.slice(0, 20)}...` : comment;

  const handleRecodeBoxClick = (item: RecodeItem) => {
    setActivity(item.title);
    setId(item.vacationTodoId);
    setContent(item.comment);
    setImage(item.image);
    setPlace(item.locate);
    onClickVacation();
  };
  return (
    <RecodeWapper>
      {recodeData.map((item) => (
        <RecodeBox
          key={item.vacationTodoId}
          onClick={() => handleRecodeBoxClick(item)}
        >
          <RecodeImg>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '5rem', height: '5rem', borderRadius: '0.5rem' }}
            />
          </RecodeImg>
          <div>
            <RecodeTitle>{item.title}</RecodeTitle>
            <RecodeSub>
              <Image
                src={local}
                alt="local"
                width={12}
                height={12}
                style={{ marginRight: '0.5rem' }}
              />
              {item.locate}
            </RecodeSub>
            <RecodeComment>{truncateComment(item.comment)}</RecodeComment>
          </div>
        </RecodeBox>
      ))}
    </RecodeWapper>
  );
}

export default Recode;
