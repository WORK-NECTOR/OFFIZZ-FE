import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TodoBox, TodoBoxAdd, TodoSub, TodoTimeInput, TodoTitle, TodoTitleInput } from './Todo.styled';
import play from '../../../../../public/todo-play.png';
import playvacation from '../../../../../public/todo-vac.png';
import playDone from '../../../../../public/done.png';
import clock from '../../../../../public/time.png';
import { TimeRangeType, TodoTime } from '@/types/timeRange.type';
import useTimeStore from '@/store/useSelectTime';
import useActivityStore from '@/store/useSelectTodo';
import axios from 'axios';
import useAuth from '@/hook/useAuth';
import { useSearchParams } from 'next/navigation';

interface TodoProps {
  day: number,
  onClick: () => void;
  isTodoAdded: boolean;
}


const Todo: React.FC<TodoProps> = ({ onClick, isTodoAdded, day }) => {
  const searchParams = useSearchParams();
  const { getAccessToken } = useAuth();
  const { setActivity } = useActivityStore(); 
  const { setTime } = useTimeStore();
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [workArr, setWorkArr] = useState<TodoTime[]>([]); 
  const [VacationArr, setVacationArr] = useState<TodoTime[]>([]); 
  const vacationType = searchParams.get('kind');

  const handleActivityClick = (time: TodoTime) => {
    setActivity(time.activity);
    setTime(formatTimeDisplay(time.time));
    onClick(); 
  };

  const formatTimeDisplay = (time: string): string => {
    const [hours, minutes] = time.split(':');
    return `${hours}시 ${minutes}분`;
  };
  
  const formatTimeInput = (time: string): `${number}:${number}` => {
    const parts = time.split(':');
    if (parts.length === 2) {
      const hours = Math.min(Math.max(parseInt(parts[0]), 0), 23); // 0~23 범위로 설정
      const minutes = Math.min(Math.max(parseInt(parts[1]), 0), 59); // 0~59 범위로 설정
      return `${hours}:${minutes}` as `${number}:${number}`;
    }
    return '00:00' as `${number}:${number}`; // 기본값
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const planTime = formatTimeInput(newTime);
      const activityName = newActivity;
      const urlType = vacationType === 'vacation' ? 'vacation' : 'work';
      
      getAccessToken().then(async (token) => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/${urlType}/todo/${day}`,
            {
              icon: 0,
              planTime: planTime,
              name: activityName,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`, // 헤더에 액세스 토큰 추가
              },
            }
          );

          alert('Todo 추가 성공');
          window.location.reload();
        } catch (error) {
          console.error('Todo 추가 실패:', error);
        }
      });
    }
  };

  useEffect(() => {
    const tempWorkArr: TodoTime[] = [
      {
        time: '04:10',
        activity: 'Core Time',
        isComplete: true,
        icon: '😎',
      },
      {
        time: '04:10',
        activity: 'Test',
        isComplete: false,
        icon: '😂',
      },
    ];

    setWorkArr(tempWorkArr);
    setVacationArr(tempWorkArr)
    getAccessToken().then(async (token) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/${day}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        const workData = response.data.workTodoResponses;
        const vacationData = response.data.vacationTodoResponses; // vacation 데이터 가져오기
        setVacationArr(vacationData);
        setWorkArr(workData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);

  return (
    <>
      {vacationType=='vacation' &&
      <>
      {isTodoAdded && (
        <TodoBoxAdd>
          <div style={{ display: 'flex' ,alignItems:'center',justifyContent:'center'}}>
            <Image
              src={playvacation}
              alt="play"
              width={36}
              height={36}
            />
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
            </div>
          </div>
        </TodoBoxAdd>
      )}
      {(vacationType === 'vacation' ? VacationArr : workArr).map((time, index) => (
        <TodoBox key={index}>
          <div style={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>
            {time.isComplete ? (
              <Image
                src={playvacation}
                alt="play"
                width={36}
                height={36}
                onClick={() => handleActivityClick(time)} 
              />
            ) : (
              <Image
                src={playDone}
                alt="play"
                width={36}
                height={36}
              />
            )}
            
            <div style={{ marginLeft: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{time.icon ? time.icon : ''}</div>
                <TodoTitle>{time.activity}</TodoTitle>
              </div>
            
            </div>
          </div>
          <div>...</div>
        </TodoBox>
      ))}</>}
      {vacationType!=='vacation' &&
      <>
      {isTodoAdded && (
        <TodoBoxAdd>
          <div style={{ display: 'flex' }}>
            <Image
              src={play}
              alt="play"
              width={36}
              height={36}
            />
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
      {(vacationType === 'vacation' ? VacationArr : workArr).map((time, index) => (
        <TodoBox key={index}>
          <div style={{ display: 'flex' }}>
            {time.isComplete ? (
              <Image
                src={play}
                alt="play"
                width={36}
                height={36}
                onClick={() => handleActivityClick(time)} 
              />
            ) : (
              <Image
                src={playDone}
                alt="play"
                width={36}
                height={36}
              />
            )}
            
            <div style={{ marginLeft: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{time.icon ? time.icon : ''}</div>
                <TodoTitle>{time.activity}</TodoTitle>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={clock} alt="time" width={15} height={15} />
                <TodoSub>{formatTimeDisplay(time.time)}</TodoSub>
              </div>
            </div>
          </div>
          <div>...</div>
        </TodoBox>
      ))}</>}
    </>
  );
};

export default Todo;
