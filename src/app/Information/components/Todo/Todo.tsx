import React from 'react';
import Image from 'next/image';
import { TodoBox, TodoSub, TodoTitle } from './Todo.styled';
import play from '../../../../../public/todo-play.png';
import clock from '../../../../../public/time.png';
import { TimeRangeType } from '@/types/timeRange.type';

interface TodoProps {
  timeArr: TimeRangeType[];
  onClick: () => void;
}
const Todo: React.FC<TodoProps> = ({ timeArr, onClick }) => {
  const calculateTimeDifference = (from: string, to: string) => {
    const fromTime = new Date(`1970-01-01T${from}:00`);
    const toTime = new Date(`1970-01-01T${to}:00`);

    const differenceInMinutes =
      (toTime.getTime() - fromTime.getTime()) / (1000 * 60);

    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return `${hours}시간 ${minutes}분`;
  };

  return (
    <>
      {timeArr.map((time, index) => (
        <TodoBox key={index}>
          <div style={{ display: 'flex' }}>
            <Image
              src={play}
              alt="play"
              width={36}
              height={36}
              onClick={onClick}
            />
            <div style={{ marginLeft: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{time.icon ? time.icon : ''}</div>
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
