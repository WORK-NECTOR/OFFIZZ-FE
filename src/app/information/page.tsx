'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Tab from '@/components/Tab/Tab';
import TimeRange from '@/components/TimeRange';
import TodoModal from '@/components/TodoModal/TodoModal';
import useAuth from '@/hook/useAuth';
import useDayStore from '@/store/useSelectDay';
import useTimeStore from '@/store/useSelectTime';
import useActivityStore from '@/store/useSelectTodo';
import useTodoIdStore from '@/store/useTodoIdStore';
import { TimeRangeType } from '@/types/timeRange.type';
import caractor from '../../../public/charactor-laptop.png';
import leftarrow from '../../../public/leftarrow.png';
import rightarrow from '../../../public/rightarrow.png';
import MainCharacterBox from './components/MainCharacterBox';
import Recommend from './components/Recommend';
import Recode from './components/Record';
import Todo from './components/Todo';
import styles from './page.module.css';
import useSelectToggleStore from '@/store/useSelectToggleStore';

function InformationPage() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTodoModalOpen, setTodoModalOpen] = useState(false);
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  const [save, setSave] = useState(false);
  const [end, setEnd] = useState(false);
  const { activity } = useActivityStore();
  const { time } = useTimeStore();
  const { id } = useTodoIdStore();
  const router = useRouter();
  const { getAccessToken } = useAuth();
  const { day, setDay } = useDayStore();
  const { activeToggle, setToggleTab } = useSelectToggleStore();
  const [timeArr, setTimeArr] = useState<TimeRangeType[]>([]);
  const [isVacationAdd, setIsVacationAdd] = useState(false);

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
  const handleTodoVacationClick = () => {
    setTodoModalOpen(true);
  };
  const handleVacationRecode = () => {
    setSave(true);
    setTodoModalOpen(true);
  };
  const closeTodoModal = () => {
    setTodoModalOpen(false);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickAddTodo = () => {
    setIsVacationAdd(true);
  };

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
              const coreTimeEntry = {
                from: response.data.startCoreTime
                  ? response.data.startCoreTime.substring(0, 5)
                  : '',
                to: response.data.endCoreTime
                  ? response.data.endCoreTime.substring(0, 5)
                  : '',
                activity: 'coreTime',
              };
              const todoHoursFormatted = response.data.todoHours.map(
                (todo: any) => ({
                  from: todo.startTime ? todo.startTime.substring(0, 5) : '',
                  to: todo.endTime ? todo.endTime.substring(0, 5) : '',
                  activity: todo.name,
                }),
              );

              setTimeArr([coreTimeEntry, ...todoHoursFormatted]);
            })
            .catch((error) => {});
        })
        .catch((error) => {});
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
    setToggleTab('vacation');
  };
  const onClickWork = () => {
    setToggleTab('work');
    router.push(`/information`);
  };

  const handleNextDay = () => {
    alert('오늘은 Day 1이에요. 지금 이 순간을 최대한 즐겨보세요!');
    setDay(day + 1); // 다음 날로 변경
  };

  const handlePrevDay = () => {
    if (day > 1) setDay(day - 1); // 1일보다 작아지지 않게 설정
  };

  if (activeToggle === 'vacation') {
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
              <div
                className={styles.workSwitch}
                onClick={onClickWork}
                aria-hidden="true"
              >
                work
              </div>
              <div
                className={styles.vacationSwitch}
                onClick={onClickVacation}
                aria-hidden="true"
              >
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
                <div className={styles.todoWrapper}>
                  <Recode onClickVacation={handleVacationRecode} />
                </div>
              </div>
              <div style={{ marginLeft: '5rem' }}>
                <div className={styles.rightTitleSwitch}>
                  to-do
                  <div
                    className={styles.addBtnSwitch}
                    onClick={onClickAddTodo}
                    aria-hidden="true"
                  >
                    추가 +
                  </div>
                </div>
                <div className={styles.todoWrapper}>
                  <Todo
                    onClick={handleTodoClick}
                    onClickVacation={handleTodoVacationClick}
                    isTodoAdded={isTodoAdded}
                    isVacationAdded={isVacationAdd}
                    day={day}
                  />
                </div>
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
          end={end}
          id={id || 0}
        />
        <TodoModal
          isOpen={isTodoModalOpen}
          onClose={closeTodoModal}
          id={id || 0}
          todoTitle={activity || ''}
          save={save}
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
            <div
              className={styles.work}
              onClick={onClickWork}
              aria-hidden="true"
            >
              work
            </div>
            <div
              className={styles.vacation}
              onClick={onClickVacation}
              aria-hidden="true"
            >
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
              <TimeRange timeArr={timeArr} length="long" />
            </div>
            <div style={{ marginLeft: '6.253rem' }}>
              <div className={styles.rightTitle}>
                to-do
                <div
                  className={styles.addBtn}
                  onClick={handleAddTodo}
                  aria-hidden="true"
                >
                  추가 +
                </div>
              </div>
              <div className={styles.todoWrapper}>
                <Todo
                  isVacationAdded={isVacationAdd}
                  onClickVacation={handleTodoVacationClick}
                  onClick={handleTodoClick}
                  isTodoAdded={isTodoAdded}
                  day={day}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.end} onClick={onClickEnd} aria-hidden="true">
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
