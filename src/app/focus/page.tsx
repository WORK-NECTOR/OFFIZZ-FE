'use client'
import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import chatactor from '../../../public/charactor-laptop.png'
import clock from '../../../public/time.png'
import { useRouter, useSearchParams } from 'next/navigation';
function FocusPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const time = searchParams.get('time');
    const onClickFinish = ()=>{
        router.push('/information?modalType=End');
    }
  return (
    <div className={styles.focusWraper}>
        <div className={styles.centerImage}>
      <Image src={chatactor} alt='캐릭터' width={64} height={64}/>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>
        <Image src={clock} alt='시계' width={10} height={10} style={{marginRight:'0.44rem'}}/>
        {time}</div>
        <div className={styles.timer}></div>
        <div className={styles.buttonWrapper}>
            <div  className={styles.buttonStop}>일시정지</div>
            <div  className={styles.buttonEnd} onClick={onClickFinish}>종료</div>
        </div>
    </div>
  )
}

export default FocusPage;
