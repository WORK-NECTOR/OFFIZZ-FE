'use client'

import React from 'react'
import styles from './page.module.css';
import Tab from '@/components/Tab/Tab';
function MyPage() {
    const onClickAlert =()=>{
        alert('아직 준비중인 기능 입니다.')
    }
  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.mypageWrapper}>
        <div className={styles.top}></div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'1.25rem'}}>
        <div className={styles.content}>
            <div className={styles.title}>내 정보</div>
            <div className={styles.userContent}>
            <div className={styles.nicknameBox}>
            <div className={styles.nickname}>닉네임</div>
            <div className={styles.userNickname}>안성현</div>
            </div>
            <div className={styles.emailBox}>
            <div className={styles.email}>이메일</div>
            <div className={styles.userEmail}>email@email.com</div>
            </div>
            </div>
            <div className={styles.userExit} onClick={onClickAlert}>회원 탈퇴</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage
