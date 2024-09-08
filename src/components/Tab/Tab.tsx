import React from 'react';
import { TabContainer, TabListContainer } from './Tab.styled';
import Link from 'next/link';

function Tab() {
  return (
    <TabContainer>
      <div id="tab-title">OFIZZ</div>
      <TabListContainer>
      <Link href="/information" passHref>
        <div id="tab-list">홈</div>
        </Link>
        <Link href="/information/quration" passHref>
        <div id="tab-list">큐레이션</div>
        </Link>
        <div id="tab-list">회고</div>
        <div id="tab-list">마이</div>
      </TabListContainer>
    </TabContainer>
  );
}

export default Tab;
