'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import thumbnail from '../../public/thumbnail.png';
import { Fragment } from 'react';
import TitleDesc from '@/components/TitleDesc';
import { TOP_MAIN } from '@/constants/main';
import Button from '@/components/Button';
import StatLabel from '@/components/StatLabel';

export default function MainPage() {
  return (
    <Fragment>
      <Header />
      <main style={{ width: '100%', height: '100%', position: 'relative' }}>
        <section
          id="first-main"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            paddingLeft: '11.44rem',
            position: 'relative',
          }}
        >
          <section
            id="first-main-text"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <p style={{ marginBottom: '1.875rem' }}>{TOP_MAIN.slogan}</p>
            <div id="title-desc-wrapper" style={{ marginBottom: '1.75rem' }}>
              <TitleDesc
                title={TOP_MAIN.title}
                desc={TOP_MAIN.desc}
                sort="left"
              />
            </div>
            <Button
              btnSize="small"
              btnText={TOP_MAIN.start}
              btnType="full"
              btnColor="var(--blue-main)"
              textColor="#fff"
            />
          </section>
          <div
            id="first-main-image"
            style={{
              position: 'absolute',
              right: '0',
              width: '42.69rem',
              height: '48rem',
            }}
          >
            <Image
              src={thumbnail}
              alt="임시 이미지"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
}
