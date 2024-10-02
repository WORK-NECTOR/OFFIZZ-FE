'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import styles from './page.module.css';
import chatactor from '../../../public/charactor-laptop.png';
import clock from '../../../public/time.png';

function FocusPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [title, setTitle] = useState<string | null>('');
  const [time, setTime] = useState<string | null>('');

  // 시간에 따른 원형 그래프 상태
  const [percentage, setPercentage] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0); // 경과 시간 상태
  const [isPaused, setIsPaused] = useState(true); // 초기 상태는 일시정지
  const [intervalId, setIntervalId] = useState<number | null>(null); // interval ID

  useEffect(() => {
    const getTitle = searchParams.get('title');
    const getTime = searchParams.get('time');
    setTitle(getTitle);
    setTime(getTime);
  }, []);

  // 경과 시간을 "HH:mm:ss" 형식으로 포맷하는 함수
  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0',
    );
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  // 1시간 기준으로 타이머 설정
  useEffect(() => {
    const totalDuration = 60 * 60 * 1000; // 1시간을 밀리초로 변환

    const startTimer = () => {
      const startTime = Date.now() - elapsedTime; // 일시정지 후 남은 경과 시간 고려

      const id = setInterval(() => {
        const currentTime = Date.now();
        const newElapsedTime = currentTime - startTime; // 경과 시간 계산
        const newPercentage = Math.min(
          (newElapsedTime / totalDuration) * 100,
          100,
        );

        setElapsedTime(newElapsedTime); // 경과 시간 업데이트
        setPercentage(newPercentage);

        // 시간이 다 되면 interval 종료 및 리셋
        if (newPercentage === 100) {
          clearInterval(id);
          // 1시간을 채웠을 때 리셋 및 새로운 1시간 시작
          setElapsedTime(0); // 경과 시간 리셋
          setPercentage(0); // 진행률 리셋
        }
      }, 1000); // 1초마다 업데이트
      // setIntervalId(id); // interval ID 저장
    };

    if (!isPaused) {
      startTimer(); // 일시정지 상태가 아닐 때 타이머 시작
    } else if (intervalId) {
      clearInterval(intervalId); // 일시정지 시 interval 정리
    }

    return () => {
      if (intervalId) clearInterval(intervalId); // 컴포넌트 언마운트 시 정리
    };
  }, [isPaused, elapsedTime]); // isPaused와 elapsedTime에 따라 실행

  // 종료 버튼 클릭 시
  const onClickFinish = async () => {
    try {
      const day = 1; // day 값을 1로 설정
      const body = {
        workTodoId: 0, // 원하는 ID로 설정
        actualTime: formatTime(elapsedTime),
      };

      await axios.patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/work/todo/fin/${day}`,
        body,
      );

      // 페이지 이동
      router.push('/information?modalType=End');
    } catch (error) {
      console.error('PATCH 요청 실패:', error); // 에러 처리
    }
  };
  // 일시정지/재생 버튼 클릭 시
  const togglePause = () => {
    setIsPaused((prev) => !prev); // 일시정지 상태를 토글
  };

  return (
    <div className={styles.focusWraper}>
      <div className={styles.centerImage}>
        <Image src={chatactor} alt="캐릭터" width={64} height={64} />
      </div>
      <div className={styles.title}>{title || ''}</div>
      <div className={styles.time}>
        <Image
          src={clock}
          alt="시계"
          width={10}
          height={10}
          style={{ marginRight: '0.44rem' }}
        />
        {time || ''}
      </div>

      {/* 원형 그래프 */}
      <div className={styles.timer}>
        <svg
          className={styles.progressCircle}
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            className={styles.progressBackground}
            cx="60"
            cy="60"
            r="54"
            strokeWidth="12"
            fill="none"
          />
          <circle
            className={styles.progressForeground}
            cx="60"
            cy="60"
            r="54"
            strokeWidth="12"
            fill="none"
            strokeDasharray={339.292} // 2 * Math.PI * 54 (원의 둘레)
            strokeDashoffset={(1 - percentage / 100) * 339.292} // 진행 상황에 따라 변경
          />
          {/* 경과 시간 표시 */}
        </svg>
      </div>
      <div>
        <div className={styles.timeTextSub}>
          {isPaused ? '잠깐 멈췄어요' : '\u00A0\u00A0\u00A0집중한 지'}
        </div>

        <text
          className={styles.timeText}
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="16"
          fill="#000"
          dominantBaseline="middle" // 가운데 정렬을 위한 설정
        >
          {formatTime(elapsedTime)} {/* 경과 시간을 포맷하여 표시 */}
        </text>
      </div>
      <div className={styles.buttonWrapper}>
        <div
          role="button"
          className={styles.buttonStop}
          onClick={togglePause}
          onKeyDown={togglePause}
          tabIndex={0}
        >
          {isPaused ? '재생' : '일시정지'}
        </div>
        <div
          role="button"
          className={styles.buttonEnd}
          onClick={onClickFinish}
          onKeyDown={onClickFinish}
          tabIndex={0}
        >
          종료
        </div>
      </div>
    </div>
  );
}

export default FocusPage;
