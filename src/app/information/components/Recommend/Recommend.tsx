import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import {
  RecommendBox,
  LinkStyle,
  NonRecomend,
  NonRecomendSub,
  NonRecommendBox,
  VRecommendBox,
  VMCtitlesub,
  VLinkStyle,
  VNonRecomend,
  VNonRecomendSub,
  VNonRecommendBox,
  VtitleSub,
  RecommnedBox,
} from './Recommend.styled';
import { MCtitlesub } from '../MainCharacterBox/MainCharacterBox.styled';
import recommendText from '../../../../../public/recommend.png';
import recommendTextPink from '../../../../../public/recommend-pink.png';
import plus from '../../../../../public/plus.png';
import plusPink from '../../../../../public/plus-pink.png';
import useAuth from '@/hook/useAuth';

interface RecommendProps {
  // eslint-disable-next-line
  vacation?: boolean; // vacation prop을 선택적으로 설정
}

function Recommend({ vacation }: RecommendProps) {
  const [recommend, setRecommend] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [recommendPlace, serRecommendPlace] = useState('');
  const { getAccessToken } = useAuth();
  useEffect(() => {
    const fetchRecommendations = async () => {
      getAccessToken().then(async (token) => {
        const url = vacation
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/recommend/vacation`
          : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/recommend/work`;

        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          serRecommendPlace(response.data.recommends);
          setRecommendations(response.data.likes);
        } catch (error) {
          // eslint-disable-next-line
          alert('추천 데이터를 가져오는 중 오류가 발생했습니다');
        }
      });
    };

    fetchRecommendations();
  }, [vacation]);

  if (vacation) {
    return (
      <VRecommendBox>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <VMCtitlesub>버킷리스트</VMCtitlesub>

          <Link href="/information/quration">
            <VLinkStyle>더 찾아보기 &gt;</VLinkStyle>
          </Link>
        </div>
        <VtitleSub>바로 오늘, 가 보고 싶었던 곳으로 떠나요!</VtitleSub>
        {!recommend && (
          <>
            <VNonRecomend>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <Image
                    src={recommendTextPink}
                    alt="추천"
                    width={45}
                    height={20}
                  />
                  <p>{recommendPlace}</p>
                </div>
                <div>
                  <Image src={plusPink} alt="plus" width={22} height={22} />
                </div>
              </div>
              <VNonRecomendSub>
                편안한 분위기에서 작업할 수 있는 카페 추천
              </VNonRecomendSub>
            </VNonRecomend>
            <VNonRecommendBox>
              {recommendations.length > 0 ? (
                recommendations.map((rec) => <RecommnedBox>{rec}</RecommnedBox>)
              ) : (
                <RecommnedBox>아직 추가된 추천 장소가 없습니다.</RecommnedBox>
              )}
            </VNonRecommendBox>
          </>
        )}
      </VRecommendBox>
    );
  }
  return (
    <RecommendBox>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MCtitlesub>
          오늘은 여기서
          <br />
          일해보는거 어때요?
        </MCtitlesub>
        <Link href="/information/quration">
          <LinkStyle>더 찾아보기 &gt;</LinkStyle>
        </Link>
      </div>
      {!recommend && (
        <>
          <NonRecomend>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex' }}>
                <Image src={recommendText} alt="추천" width={45} height={20} />
                <p>{recommendPlace}</p>
              </div>
              <div>
                <Image src={plus} alt="plus" width={22} height={22} />
              </div>
            </div>
            <NonRecomendSub>
              편안한 분위기에서 작업할 수 있는 카페 추천
            </NonRecomendSub>
          </NonRecomend>
          <VNonRecommendBox>
            {recommendations.length > 0 ? (
              recommendations.map((rec) => <RecommnedBox>{rec}</RecommnedBox>)
            ) : (
              <NonRecommendBox>
                아직 추가된 추천 장소가 없습니다.
              </NonRecommendBox>
            )}
          </VNonRecommendBox>
        </>
      )}
    </RecommendBox>
  );
}

export default Recommend;
