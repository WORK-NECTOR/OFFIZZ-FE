import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TabContainer, TabListContainer } from './Tab.styled';
import title from '../../../public/title.png';
import my from '../../../public/my.png';
import retrospect from '../../../public/retrospect.png';
import home from '../../../public/home.png';
import recomend from '../../../public/recomend.png';
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
            <Image src={home} alt="home" width={24} height={24} />홈
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
            <Image src={recomend} alt="recommend" width={24} height={24} />
            추천
          </div>
        </Link>
        <Link href="/information/retrospect" passHref>
          <div
            role="button"
            tabIndex={0}
            id="tab-list"
            className={activeTab === '/information/retrospect' ? 'active' : ''}
            onClick={() => setActiveTab('/information/retrospect')}
            onKeyDown={() => setActiveTab('/information/retrospect')}
          >
            <Image src={retrospect} alt="retrospect" width={24} height={24} />
            회고
          </div>
        </Link>
        <Link href="/information/mypage" passHref>
          <div
            role="button"
            id="tab-list"
            tabIndex={0}
            className={activeTab === '/information/mypage' ? 'active' : ''}
            onClick={() => setActiveTab('/information/mypage')}
            onKeyDown={() => setActiveTab('/information/mypage')}
          >
            <Image src={my} alt="my" width={24} height={24} />
            마이
          </div>
        </Link>
      </TabListContainer>
    </TabContainer>
  );
}

export default Tab;
