import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TabContainer, TabListContainer } from './Tab.styled';
import title from '../../../public/title.png';
import useTabStore from '@/store/useTabStore';

function Tab() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <TabContainer>
      <div id="tab-title">
        <Image src={title} alt="title" width={49.84} height={15.81} />
      </div>
      <TabListContainer>
        <Link href="/information" passHref>
          <div
            role="button"
            tabIndex={0}
            id="tab-list"
            className={activeTab === '/information' ? 'active' : ''}
            onClick={() => setActiveTab('/information')}
            onKeyDown={() => setActiveTab('/information')}
          >
            홈
          </div>
        </Link>
        <Link href="/information/quration" passHref>
          <div
            role="button"
            tabIndex={0}
            id="tab-list"
            className={activeTab === '/information/quration' ? 'active' : ''}
            onClick={() => setActiveTab('/information/quration')}
            onKeyDown={() => setActiveTab('/information/quration')}
          >
            추천
          </div>
        </Link>
        <Link href="/information/recap" passHref>
          <div
            role="button"
            tabIndex={0}
            id="tab-list"
            className={activeTab === '/information/recap' ? 'active' : ''}
            onClick={() => setActiveTab('/information/recap')}
            onKeyDown={() => setActiveTab('/information/recap')}
          >
            회고
          </div>
        </Link>
        <Link href="/information/my" passHref>
          <div
            role="button"
            id="tab-list"
            tabIndex={0}
            className={activeTab === '/information/my' ? 'active' : ''}
            onClick={() => setActiveTab('/information/my')}
            onKeyDown={() => setActiveTab('/information/my')}
          >
            마이
          </div>
        </Link>
      </TabListContainer>
    </TabContainer>
  );
}

export default Tab;
