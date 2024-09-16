import React from 'react';
import Link from 'next/link';
import { RecommendBox } from './Recommend.styled';

function Recommend() {
  return (
    <RecommendBox>
      오늘은 여기서 일해보는거 어때요?
      <Link href="/information/quration">더 찾아보기</Link>
    </RecommendBox>
  );
}

export default Recommend;
