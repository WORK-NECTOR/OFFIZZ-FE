'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import MainCharacterBox from './components/MainCharacterBox';
import Recommend from './components/Recommend';
import TimeRange from '@/components/TimeRange';
import { TimeRangeType } from '@/types/timeRange.type';
import Todo from './components/Todo';
import Modal from '@/components/Modal';
import caractor from '../../../public/charactor-laptop.png';
import useTimeStore from '@/store/useSelectTime';
import useActivityStore from '@/store/useSelectTodo';
import InfoSearchParams from './components/InfoSearchParams/InfoSearchParams';
import Recode from './components/Record';
import leftarrow from '../../../public/leftarrow.png';
import rightarrow from '../../../public/rightarrow.png';
import useAuth from '@/hook/useAuth';
import useDayStore from '@/store/useSelectDay';
import useTodoIdStore from '@/store/useTodoIdStore';

function InformationPage() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [vacationType, setVacationType] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  const [end, setEnd] = useState(false);
  const { activity } = useActivityStore();
  const { time } = useTimeStore();
  const { id } = useTodoIdStore();
  const router = useRouter();
  const { getAccessToken } = useAuth();
  const { day, setDay } = useDayStore();
  const [timeArr, setTimeArr] = useState<TimeRangeType[]>([]);
  const handleSearchParams = (
    paramsModalType: string | null,
    paramsVacationType: string | null,
  ) => {
    setModalType(paramsModalType);
    setVacationType(paramsVacationType);
  };

  const todoContent =
    modalType === 'End'
      ? {
          title: '할 일 종료',
          image: caractor,
          desc: '최고에요!팀 데이터 그래프화를 무사히 마쳤어요.',
          buttonName: '확인',
        }
      : {
          title: '집중하기',
          image: caractor,
          desc: '지금부터 집중 타이머를 시작할게요.<br/>집중한 시간은 근무 시간표에 기록돼요.',
          buttonName: '시작하기',
        };

  useEffect(() => {
    if (modalType === 'End') {
      setModalOpen(true);
    }
  }, [modalType]);

  const handleTodoClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  // const timeArr: TimeRangeType[] = [
  //   {
  //     from: '11:30',
  //     to: '15:30',
  //     activity: 'Core Time',
  //     icon: '😎',
  //   },
  //   {
  //     from: '16:00',
  //     to: '17:15',
  //     activity: 'Test',
  //     icon: '😂',
  //   },
  // ];

  useEffect(() => {
    const fetchTimeArr = async () => {
      getAccessToken()
        .then((token) => {
          axios
            .get(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/coretime/${day}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            )
            .then((response) => {
              setTimeArr(response.data.todoHours);
            })
            .catch((error) => {
              console.error('서버에서 데이터를 가져오는 중 오류 발생:', error);
            });
        })
        .catch((error) => {
          console.error('토큰을 가져오는 중 오류 발생:', error);
        });
    };

    fetchTimeArr();
  }, [day]);
  const onClickEnd = () => {
    setModalOpen(true);
    setEnd(true);
  };
  const handleAddTodo = async () => {
    setIsTodoAdded(true); // Todo 추가 시 true로 설정
  };
  const onClickVacation = () => {
    handleSearchParams(null, 'vacation');
    router.push(`/information?kind=vacation`);
  };
  const onClickWork = () => {
    handleSearchParams(null, 'work');
    router.push(`/information`);
  };

  const handleNextDay = () => {
    setDay(day + 1); // 다음 날로 변경
  };

  const handlePrevDay = () => {
    if (day > 1) setDay(day - 1); // 1일보다 작아지지 않게 설정
  };
  console.log(timeArr);
  if (vacationType === 'vacation') {
    return (
      <div style={{ display: 'flex' }}>
        <Tab />
        <div className={styles.backgroundSwitch}>
          <div className={styles.topSwitch}>
            <div className={styles.daySwitch}>
              <Image
                src={leftarrow}
                alt="arrow"
                width={40}
                height={40}
                onClick={handlePrevDay}
              />
              day {day}
              <Image
                src={rightarrow}
                alt="arrow"
                width={40}
                height={40}
                onClick={handleNextDay}
              />
            </div>
            <div className={styles.switchSwitch}>
              <div className={styles.workSwitch} onClick={onClickWork}>
                work
              </div>
              <div className={styles.vacationSwitch} onClick={onClickVacation}>
                vacation
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={styles.leftWrapperSwitch}>
              <MainCharacterBox />
              <Recommend vacation />
            </div>
            <div className={styles.rightWrapperSwitch}>
              <div>
                <div className={styles.rightTitleSwitch}>여행 기록</div>
                <Recode />
              </div>
              <div style={{ marginLeft: '8.25rem' }}>
                <div className={styles.rightTitleSwitch}>
                  to-do
                  <div className={styles.addBtnSwitch}>추가 +</div>
                </div>
                <Todo
                  onClick={handleTodoClick}
                  isTodoAdded={isTodoAdded}
                  day={day}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          todoTitle={activity || ''}
          time={time || ''}
          content={todoContent}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.background}>
        <div className={styles.top}>
          <div className={styles.day}>
            <Image
              src={leftarrow}
              alt="arrow"
              width={40}
              height={40}
              onClick={handlePrevDay}
            />
            day {day}
            <Image
              src={rightarrow}
              alt="arrow"
              width={40}
              height={40}
              onClick={handleNextDay}
            />
          </div>
          <div className={styles.switch}>
            <div className={styles.work} onClick={onClickWork}>
              work
            </div>
            <div className={styles.vacation} onClick={onClickVacation}>
              vacation
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={styles.leftWrapper}>
            <MainCharacterBox />
            <Recommend />
          </div>
          <div className={styles.rightWrapper}>
            <div>
              <div className={styles.rightTitle}>근무 시간표</div>
              {/* <TimeRange timeArr={timeArr}length = 'long' /> */}
            </div>
            <div style={{ marginLeft: '6.253rem' }}>
              <div className={styles.rightTitle}>
                to-do
                <div className={styles.addBtn} onClick={handleAddTodo}>
                  추가 +
                </div>
              </div>
              <Todo
                onClick={handleTodoClick}
                isTodoAdded={isTodoAdded}
                day={day}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.end} onClick={onClickEnd}>
        워케이션이 마무리되었나요?&nbsp;&nbsp;&nbsp;&nbsp; &gt;
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        todoTitle={activity || ''}
        time={time || ''}
        id={id || 0}
        content={todoContent}
        end={end}
      />
    </div>
  );
}

export default InformationPage;
