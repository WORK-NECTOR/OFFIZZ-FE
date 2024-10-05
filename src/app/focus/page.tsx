'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './page.module.css';
import chatactor from '../../../public/charactor-laptop.png';
import clock from '../../../public/time.png';
import FocusSearchParams from './components/FocusSearchParams/FocusSearchParams';
import useAuth from '@/hook/useAuth';

function FocusPage() {
  const router = useRouter();
  const [title, setTitle] = useState<string | null>(null);
  const [Id, setId] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const entryTime = useRef<Date | null>(null); // 진입시간

  const handleSearchParams = (
    paramsTitle: string | null,
    paramsTime: string | null,
    paramsId: number | null,
  ) => {
    setTitle(paramsTitle);
    setTime(paramsTime);
    setId(paramsId);
  };

  const [percentage, setPercentage] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0); // 경과 시간 상태
  const [isPaused, setIsPaused] = useState(false); // 초기 상태는 일시정지
  const intervalIdRef = useRef<number | null>(null); // interval ID를 ref로 관리
  const { getAccessToken } = useAuth();
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

  // "HH:mm" 형식으로 변환하는 함수
  const formatTimeHHMM = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // 1시간 기준으로 타이머 설정
  useEffect(() => {
    if (!entryTime.current) {
      const now = new Date();
      entryTime.current = now;
      console.log('페이지 진입 시각:', now.toLocaleTimeString());
    }
    const totalDuration = 60 * 60 * 1000; // 1시간을 밀리초로 변환

    const startTimer = () => {
      const startTime = Date.now() - elapsedTime; // 일시정지 후 남은 경과 시간 고려

      const id = window.setInterval(() => {
        const currentTime = Date.now();
        const newElapsedTime = currentTime - startTime; // 경과 시간 계산
        const newPercentage = Math.min(
          (newElapsedTime / totalDuration) * 100,
          100,
        );

        setElapsedTime(newElapsedTime); // 경과 시간 업데이트
        setPercentage(newPercentage);

        if (newPercentage === 100) {
          clearInterval(id);
          setElapsedTime(0); // 경과 시간 리셋
          setPercentage(0); // 진행률 리셋
        }
      }, 1000);

      intervalIdRef.current = id; // interval ID 저장
    };

    if (!isPaused) {
      startTimer(); // 일시정지 상태가 아닐 때 타이머 시작
    } else if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current); // 일시정지 시 interval 정리
      intervalIdRef.current = null;
    }

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current); // 컴포넌트 언마운트 시 정리
    };
  }, [isPaused, elapsedTime]);

  const onClickFinish = () => {
    const day = 1;
    const startTime = entryTime.current
      ?.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      .replace(':', ':');
    const endTime = formatTimeHHMM(new Date()); // 종료 시간
    const actualTime = formatTimeHHMM(new Date(elapsedTime));
    const body = {
      workTodoId: Id,
      actualTime,
      startTime,
      endTime,
    };

    console.log(body);

    // Access token을 가져오는 Promise
    getAccessToken()
      .then((token) =>
        axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/work/todo/fin/${day}`,
          body,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
            },
          },
        ),
      )
      .then(() => {
        router.push('/information?modalType=End');
      })
      .catch((error) => {
        console.error('요청 중 오류 발생:', error);
      });
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev); // 일시정지 상태를 토글
  };

  return (
    <div className={styles.focusWraper}>
      <Suspense fallback={<div>Loading...</div>}>
        <FocusSearchParams onParamsChange={handleSearchParams} />
      </Suspense>
      <div className={styles.centerImage}>
        <Image src={chatactor} alt="캐릭터" width={64} height={64} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>
        <Image
          src={clock}
          alt="시계"
          width={10}
          height={10}
          style={{ marginRight: '0.44rem' }}
        />
        {time}
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
            strokeDasharray={339.292}
            strokeDashoffset={(1 - percentage / 100) * 339.292}
          />
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
          dominantBaseline="middle"
        >
          {formatTime(elapsedTime)}
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
