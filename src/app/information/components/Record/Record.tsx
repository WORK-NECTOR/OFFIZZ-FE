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

interface RecodeItem {
  vacationTodoId: number;
  title: string;
  locate: string;
  comment: string;
  image: string;
}

function Recode() {
  const [recodeData, setRecordData] = useState<RecodeItem[]>([]);
  const { getAccessToken } = useAuth();

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

  return (
    <RecodeWapper>
      {recodeData.map((item) => (
        <RecodeBox key={item.vacationTodoId}>
          <RecodeImg>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
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
