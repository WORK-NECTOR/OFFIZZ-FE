'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Header from '@/components/Header';
import RecapBox from '@/components/RecapBox/RecapBox';
import styles from './page.module.css';
import { TOP_RECAP } from '@/constants/recap';
import TitleDesc from '@/components/TitleDesc';
import recapImg1 from '../../../public/recapimg.png';
import recapImg2 from '../../../public/recapimg2.png';
import useAuth from '@/hook/useAuth';

interface RecapDataType {
  workationId: number;
  name: string;
  address: string;
  startDate: string;
  endDate: string;
}

function NonRecapDataBox() {
  return (
    <div className={styles['non-recap-wrapper']}>
      <div className={styles['non-recap-title']}>
        아직 Recap 기록이 없어요.
        <br />
        오피츠와 함께 워케이션을 1회 이상 마치면 Recap을 볼 수 있어요.
      </div>
    </div>
  );
}
function RecapPage() {
  // 리캡 데이터 조회
  // const recapData = true;
  const [recapData, setRecapData] = useState<RecapDataType[]>([]);
  const theme = {
    recap: {
      h2: {
        fontFamily: 'Figtree',
        fontSize: '2.5rem',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '3.5rem',
      },
      p: {
        color: 'var(--Greyscale-400, #9d9d9d)',
        fontFamily: 'Pretendard',
        fontSize: '1.125rem',
        fontWeight: 400,
      },
    },
  };
  // 샘플 데이터
  // const workationData = [
  //   {
  //     workationId: 1,
  //     name: 'Workation A',
  //     address: '123 Ocean Drive',
  //     startDate: '2024-10-09',
  //     endDate: '2024-10-15',
  //   },
  //   {
  //     workationId: 2,
  //     name: 'Workation B',
  //     address: '456 Mountain Ave',
  //     startDate: '2024-11-01',
  //     endDate: '2024-11-07',
  //   },
  // ];

  const { getAccessToken } = useAuth();
  useEffect(() => {
    const fetchRecapData = async () => {
      getAccessToken().then(async (token) => {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/entire/recap/all`;

        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setRecapData(response.data);
        } catch (error) {
          // eslint-disable-next-line
          alert('리캡 데이터를 가져오는 중 오류가 발생했습니다');
        }
      });
    };

    fetchRecapData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles['recap-wrapper']}>
        <div className={styles['recap-title-wrapper']}>
          <ThemeProvider theme={theme}>
            <TitleDesc
              sort="left"
              title={TOP_RECAP.title}
              desc={TOP_RECAP.desc}
            />
          </ThemeProvider>
        </div>
        {!recapData && <NonRecapDataBox />}
        {recapData && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '72rem',
            }}
          >
            {recapData.slice(0, 2).map((recap, index) => (
              <RecapBox
                workationId={recap.workationId}
                name={recap.name}
                address={recap.address}
                startDate={recap.startDate}
                endDate={recap.endDate}
                img={index === 0 ? recapImg1 : recapImg2}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default RecapPage;
