'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import thumbnail from '../../public/thumbnail.png';
import TitleDesc from '@/components/TitleDesc';
import { DASHBOARD_MAIN, TODO_MAIN, TOP_MAIN } from '@/constants/main';
import Button from '@/components/Button';

export default function MainPage() {
  return (
    <>
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
              textColor="var(--white-main)"
              hoverColor="var(--blue-dark)"
            />
          </section>
          <div
            id="first-main-image"
            style={{
              position: 'absolute',
              right: '0',
              width: '50%',
              height: '100vh',
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
            height: '100vh',
            marginTop: '5.25rem',
            marginBottom: '6.625rem',
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
              fontFamily: 'Figtree',
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
              width: '100%',
              height: '100%',
              position: 'relative',
              marginTop: '4rem',
            }}
          >
            <Image
              src={thumbnail}
              alt="임시 이미지"
              style={{
                width: '73%',
                height: '58%',
                borderRadius: '1.91206rem',
                objectFit: 'cover',
                boxShadow: '0px 3.824px 42.065px 0px rgba(0, 0, 0, 0.08)',
              }}
            />
          </div>
        </section>
        <section
          id="third-main"
          style={{
            width: '100%',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            backgroundColor: 'var(--blue-greyish)',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <section
            id="third-main-content"
            style={{
              width: '73%',
              height: '64%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <section id="third-main-text">
              <p
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--blue-main)',
                  fontFamily: 'Figtree',
                  marginBottom: '1.25rem',
                }}
              >
                {TODO_MAIN.index}
              </p>
              <TitleDesc
                title={TODO_MAIN.title}
                desc={TODO_MAIN.desc}
                sort="left"
              />
            </section>
            <Image
              src={thumbnail}
              alt="임시 이미지"
              style={{
                width: '60%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1.75rem',
                boxShadow: '0px 3.824px 42.065px 0px rgba(0, 0, 0, 0.08)',
              }}
            />
          </section>
        </section>
      </main>
    </>
  );
}
