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
import playvacation from '../../../../../public/todo-vac.png';
import playDone from '../../../../../public/done.png';
import play from '../../../../../public/todo-play.png';
import clock from '../../../../../public/time.png';
import { TodoTime } from '@/types/timeRange.type';
import useTimeStore from '@/store/useSelectTime';
import useActivityStore from '@/store/useSelectTodo';
import useAuth from '@/hook/useAuth';
import useTodoIdStore from '@/store/useTodoIdStore';
import useSelectToggleStore from '@/store/useSelectToggleStore';

interface TodoProps {
  day: number;
  onClick: () => void;
  // eslint-disable-next-line
  onClickVacation: () => void;
  isTodoAdded: boolean;
  isVacationAdded: boolean;
}
// eslint-disable-next-line
const Todo: React.FC<TodoProps> = ({
  onClick,
  onClickVacation,
  isTodoAdded,
  isVacationAdded,
  day,
}) => {
  const { getAccessToken } = useAuth();
  const { setActivity } = useActivityStore();
  const { setTime } = useTimeStore();
  const { setId } = useTodoIdStore();
  const {activeToggle} = useSelectToggleStore();
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [workArr, setWorkArr] = useState<TodoTime[]>([]);
  const [vacationArr, setVacationArr] = useState<TodoTime[]>([]);
  // const vacationType = searchParams.get('kind');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleActivityClick = (time: TodoTime) => {
    setActivity(time.name);
    // eslint-disable-next-line
    setTime(formatTimeDisplay(time.time));
    setId(
      // eslint-disable-next-line
      time.workTodoId
        ? time.workTodoId
        : time.vacationTodoId
          ? time.vacationTodoId
          : 0,
    );
    onClick();
  };

  const handleVacationClick =
    (time: TodoTime) => (event: React.MouseEvent<HTMLImageElement>) => {
      setId(time.vacationTodoId ? time.vacationTodoId : 0);
      setActivity(time.name);
      if (onClickVacation) {
        onClickVacation();
      }
    };

  const formatTimeDisplay = (time: string): string => {
    const [hours, minutes] = time.split(':');
    return `${hours}시 ${minutes}분`;
  };

  const formatNewtime = (time: string): `${number}:${number}` => {
    const timePattern = /(\d+)\s*시간\s*(\d+)\s*분/;
    const matches = time.match(timePattern);
    if (matches) {
      const hours = Math.min(Math.max(parseInt(matches[1], 10), 0), 23);
      const minutes = Math.min(Math.max(parseInt(matches[2], 10), 0), 59);
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}` as `${number}:${number}`;
    }
    return '00:00' as `${number}:${number}`;
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isSubmitting) {
      setIsSubmitting(true); // 요청 시작
      const planTime = formatNewtime(newTime);
      const activityName = newActivity;
      const urlType = activeToggle === 'vacation' ? 'vacation' : 'work';

      try {
        const token = await getAccessToken();
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/${urlType}/todo/${day}`,
          {
            icon: 0,
            planTime,
            name: activityName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        // eslint-disable-next-line
        // window.location.reload();
      } catch (error) {
        alert(error);
      } finally {
        setIsSubmitting(false); // 요청 완료 후 상태 초기화
      }
    }
  };

  useEffect(() => {
    // const tempWorkArr: TodoTime[] = [
    //   {
    //     time: '04:10',
    //     activity: 'Core Time',
    //     isComplete: true,
    //     icon: '😎',
    //   },
    //   {
    //     time: '04:10',
    //     activity: 'Test',
    //     isComplete: false,
    //     icon: '😂',
    //   },
    // ];

    // setWorkArr(tempWorkArr);
    // setVacationArr(tempWorkArr)
    getAccessToken().then(async (token) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/todo/${day}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const workData = response.data.workTodoResponses;
        const vacationData = response.data.vacationTodoResponses;
        setVacationArr(vacationData);
        setWorkArr(workData);
      } catch (error) {
        alert(error);
      }
    });
  }, [workArr,vacationArr]);

  return (
    <>
      {activeToggle === 'vacation' && (
        <>
          {isVacationAdded && (
            <TodoBoxAdd>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image src={playvacation} alt="play" width={36} height={36} />
                <div style={{ marginLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={clock} alt="time" width={15} height={15} />
                    <TodoTitleInput
                      type="text"
                      value={newActivity}
                      onChange={(e) => setNewActivity(e.target.value)}
                      placeholder="휴가 입력"
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              </div>
            </TodoBoxAdd>
          )}
          {vacationArr.map((time) => (
            <TodoBox key={time.vacationTodoId}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {time.isComplete ? (
                  <Image src={playDone} alt="play" width={36} height={36} />
                ) : (
                  <Image
                    src={playvacation}
                    alt="play"
                    width={36}
                    height={36}
                    onClick={handleVacationClick(time)}
                  />
                )}

                <div style={{ marginLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{time.icon ? time.icon : '🏞️'}</div>
                    <TodoTitle>{time.name}</TodoTitle>
                  </div>
                </div>
              </div>
              <div>...</div>
            </TodoBox>
          ))}
        </>
      )}
      {activeToggle !== 'vacation' && (
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
          {workArr.map((time, index) => (
            <TodoBox key={time.workTodoId}>
              <div style={{ display: 'flex' }}>
                {time.isComplete ? (
                  <Image src={playDone} alt="play" width={36} height={36} />
                ) : (
                  <Image
                    src={play}
                    alt="play"
                    width={36}
                    height={36}
                    onClick={() => handleActivityClick(time)}
                  />
                )}

                <div style={{ marginLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{time.icon ? time.icon : '😎'}</div>
                    <TodoTitle>{time.name}</TodoTitle>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={clock} alt="time" width={15} height={15} />
                    <TodoSub>{formatTimeDisplay(time.time)}</TodoSub>
                  </div>
                </div>
              </div>
              <div>...</div>
            </TodoBox>
          ))}
        </>
      )}
    </>
  );
};

export default Todo;
