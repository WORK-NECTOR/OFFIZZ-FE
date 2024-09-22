'use client';

import React, { useEffect, useState } from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import MainCharacterBox from './components/MainCharacterBox';
import Recommend from './components/Recommend';
import TimeRange from '@/components/TimeRange';
import { TimeRangeType } from '@/types/timeRange.type';
import Todo from './components/Todo';
import Modal from '@/components/Modal';
import caractor from '../../../public/charactor-laptop.png';
import {useSearchParams } from 'next/navigation';
import useActivityStore from '@/store/useselectTodo';
import { time } from 'console';
import useTimeStore from '@/store/useSelectTime';

function InformationPage() {
  const searchParams = useSearchParams();
  const modalType = searchParams.get('modalType');
  const [isModalOpen, setModalOpen] = useState(false);
  const { activity } = useActivityStore();
  const { time } = useTimeStore();
  const todoContent = modalType === 'End' 
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

  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.background}>
        <div className={styles.top}>
          <div className={styles.day}>day1</div>
          <div className={styles.switch}>SwitchBtn</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={styles.leftWrapper}>
            <MainCharacterBox />
            <Recommend />
          </div>
          <div className={styles.rightWrapper}>
            <div>
              <div className={styles.rightTitle}>근무 시간표</div>
              <TimeRange timeArr={timeArr} />
            </div>
            <div style={{ marginLeft: '1.25rem' }}>
              <div className={styles.rightTitle}>
                to-do
                <div className={styles.addBtn}>추가 +</div>
              </div>
              <Todo timeArr={timeArr} onClick={handleTodoClick} />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} todoTitle={activity?activity:''} time={time?time:''}content={todoContent} />
    </div>
  );
}

export default InformationPage;
