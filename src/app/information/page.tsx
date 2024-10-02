'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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

function InformationPage() {
  const [modalType, setModalType] = useState<string | null>('');
  const [vacationType, setVacationType] = useState<string | null>('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  const { activity } = useActivityStore();
  const { time } = useTimeStore();
  const router = useRouter();
  // modalType이 state로 바뀌어서 todoContent 여기 아마 useEffect 같은 걸로 수정해야 할 수도 있습니다
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
    const searchParams = useSearchParams();
    const getModalType = searchParams.get('modalType');
    const getVacationType = searchParams.get('kind');
    setModalType(getModalType);
    setVacationType(getVacationType);
  }, []);

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
  const timeArr: TimeRangeType[] = [
    {
      from: '11:30',
      to: '15:30',
      activity: 'Core Time',
      icon: '😎',
    },
    {
      from: '16:00',
      to: '17:15',
      activity: 'Test',
      icon: '😂',
    },
  ];

  const handleAddTodo = () => {
    setIsTodoAdded(true); // Todo 추가 시 true로 설정
  };

  const onClickVacation = () => {
    router.push(`/information?kind=vacation`);
  };

  const onClickWork = () => {
    router.push(`/information`);
  };

  if (vacationType === 'vacation') {
    return (
      <div style={{ display: 'flex' }}>
        <Tab />
        <div className={styles.backgroundSwitch}>
          <div className={styles.topSwitch}>
            <div className={styles.daySwitch}>day1</div>
            <div className={styles.switchSwitch}>
              <div
                role="button"
                className={styles.workSwitch}
                onClick={onClickWork}
                onKeyDown={onClickWork}
                tabIndex={0}
              >
                work
              </div>
              <div className={styles.vacationSwitch}>vacation</div>
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
              </div>
              <div style={{ marginLeft: '8.25rem' }}>
                <div className={styles.rightTitleSwitch}>
                  to-do
                  <div
                    role="button"
                    className={styles.addBtnSwitch}
                    onClick={handleAddTodo}
                    onKeyDown={handleAddTodo}
                    tabIndex={0}
                  >
                    추가 +
                  </div>
                </div>
                <Todo
                  timeArr={timeArr}
                  onClick={handleTodoClick}
                  isTodoAdded={isTodoAdded}
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
          <div className={styles.day}>day1</div>
          <div className={styles.switch}>
            <div className={styles.work}>work</div>
            <div
              role="button"
              tabIndex={0}
              className={styles.vacation}
              onClick={onClickVacation}
              onKeyDown={onClickVacation}
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
              <TimeRange length="long" timeArr={timeArr} />
            </div>
            <div style={{ marginLeft: '6.253rem' }}>
              <div className={styles.rightTitle}>
                to-do
                <div
                  role="button"
                  tabIndex={0}
                  className={styles.addBtn}
                  onClick={handleAddTodo}
                  onKeyDown={handleAddTodo}
                >
                  추가 +
                </div>
              </div>
              <Todo
                timeArr={timeArr}
                onClick={handleTodoClick}
                isTodoAdded={isTodoAdded}
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

export default InformationPage;
