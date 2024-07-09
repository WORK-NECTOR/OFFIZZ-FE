'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import dummy from '../../public/dummy-working.jpg';
import thumbnail from '../../public/thumbnail.png';
import { Fragment } from 'react';
import TitleDesc from '@/components/TitleDesc';
import { DASHBOARD_MAIN, TOP_MAIN } from '@/constants/main';
import Button from '@/components/Button';

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
              textColor="var(--main-white)"
              hoverColor="var(--blue-dark)"
            />
          </section>
          <div
            id="first-main-image"
            style={{
              position: 'absolute',
              right: '0',
              width: '50%',
              height: '48rem',
            }}
          >
            <Image
              src={thumbnail}
              alt="서비스 메인 이미지"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </section>
        <section
          id="second-main"
          style={{
            width: '100%',
            height: '100%',
            marginTop: '5.25rem',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--blue-main)',
              textAlign: 'center',
              marginBottom: '1.25rem',
            }}
          >
            {DASHBOARD_MAIN.index}
          </p>
          <TitleDesc
            title={DASHBOARD_MAIN.title}
            desc={DASHBOARD_MAIN.desc}
            sort="center"
          />
          <div
            id="second-main-image"
            style={{
              position: 'relative',
              marginTop: '4rem',
            }}
          >
            <Image
              src={thumbnail}
              alt="임시 이미지"
              style={{
                width: '62.5rem',
                height: '36.25rem',
                borderRadius: '1.91206rem',
                objectFit: 'cover',
                marginBottom: '6.62rem',
              }}
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
}
