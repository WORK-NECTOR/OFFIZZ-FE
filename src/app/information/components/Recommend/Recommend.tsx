import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
} from './Recommend.styled';
import { MCtitlesub } from '../MainCharacterBox/MainCharacterBox.styled';
import recommendText from '../../../../../public/recommend.png';
import recommendTextPink from '../../../../../public/recommend-pink.png';
import plus from '../../../../../public/plus.png';
import plusPink from '../../../../../public/plus-pink.png';

interface RecommendProps {
  vacation?: boolean; // vacation prop을 선택적으로 설정
}
function Recommend({ vacation }: RecommendProps) {
  const [recommend, setRecommend] = useState(false);

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
                  <p>피츠카페</p>
                </div>
                <div>
                  <Image src={plusPink} alt="plus" width={22} height={22} />
                </div>
              </div>
              <VNonRecomendSub>
                카페를 좋아하는 성현님을 위한 카페 추천
              </VNonRecomendSub>
            </VNonRecomend>
            <VNonRecommendBox>아직 추가된 work 장소가 없어요.</VNonRecommendBox>
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
                <p>피츠카페</p>
              </div>
              <div>
                <Image src={plus} alt="plus" width={22} height={22} />
              </div>
            </div>
            <NonRecomendSub>
              카페를 좋아하는 성현님을 위한 카페 추천
            </NonRecomendSub>
          </NonRecomend>
          <NonRecommendBox>아직 추가된 work 장소가 없어요.</NonRecommendBox>
        </>
      )}
    </RecommendBox>
  );
}

export default Recommend;
