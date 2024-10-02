import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
  TodoBox,
  TodoBoxAdd,
  TodoSub,
  TodoTimeInput,
  TodoTitle,
  TodoTitleInput,
} from './Todo.styled';
import play from '../../../../../public/todo-play.png';
import clock from '../../../../../public/time.png';
import { TimeRangeType } from '@/types/timeRange.type';
import useTimeStore from '@/store/useSelectTime';
import useActivityStore from '@/store/useSelectTodo';

interface TodoProps {
  timeArr: TimeRangeType[];
  onClick: () => void;
  isTodoAdded: boolean;
}
// eslint-disable-next-line
const Todo: React.FC<TodoProps> = ({ timeArr, onClick, isTodoAdded }) => {
  const { setActivity } = useActivityStore();
  const { setTime } = useTimeStore();
  const [calculateTime, setCalculateTime] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [updatedTimeArr, setUpdatedTimeArr] = useState<TimeRangeType[]>([]); // 초기화

  const calculateTimeDifference = (from: string, to: string) => {
    const fromTime = new Date(`1970-01-01T${from}:00`);
    const toTime = new Date(`1970-01-01T${to}:00`);

    const differenceInMinutes =
      (toTime.getTime() - fromTime.getTime()) / (1000 * 60);
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return `${hours}시간 ${minutes}분`;
  };

  const handleActivityClick = (time: any) => {
    setActivity(time.activity);
    setTime(calculateTimeDifference(time.from, time.to));
    onClick();
  };

  const formatTimeInput = (time: string): `${number}:${number}` => {
    const parts = time.split(':');
    if (parts.length === 2) {
      // eslint-disable-next-line
      const hours = Math.min(Math.max(parseInt(parts[0]), 0), 23); // 0~23 범위로 설정
      // eslint-disable-next-line
      const minutes = Math.min(Math.max(parseInt(parts[1]), 0), 59); // 0~59 범위로 설정
      return `${hours}:${minutes}` as `${number}:${number}`;
    }
    return '00:00' as `${number}:${number}`; // 기본값
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (e.key === 'Enter') {
    // }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const day = 1;
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/${day}`,
        );
        const fetchedData = response.data;
        // console.log(fetchedData);
        setUpdatedTimeArr(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // timeArr의 변화를 감지하여 updatedTimeArr 업데이트
    setUpdatedTimeArr(timeArr);
  }, [timeArr]);

  return (
    <>
      {isTodoAdded && (
        <TodoBoxAdd>
          <div style={{ display: 'flex' }}>
            <Image src={play} alt="play" width={36} height={36} />
            <div style={{ marginLeft: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={clock} alt="time" width={15} height={15} />
                <TodoTitleInput
                  type="text"
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  placeholder="할 일 입력"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={clock} alt="time" width={15} height={15} />
                <TodoTimeInput
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="0시간 0분"
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </TodoBoxAdd>
      )}
      {updatedTimeArr.map((time, index) => (
        // eslint-disable-next-line
        <TodoBox key={index}>
          <div style={{ display: 'flex' }}>
            <Image
              src={play}
              alt="play"
              width={36}
              height={36}
              onClick={() => handleActivityClick(time)} // Pass the activity to the handler
            />
            <div style={{ marginLeft: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* <div>{time.icon ? time.icon : ''}</div> */}
                <TodoTitle>{time.activity}</TodoTitle>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={clock} alt="time" width={15} height={15} />
                <TodoSub>{calculateTimeDifference(time.from, time.to)}</TodoSub>
              </div>
            </div>
          </div>
          <div>...</div>
        </TodoBox>
      ))}
    </>
  );
};

export default Todo;
