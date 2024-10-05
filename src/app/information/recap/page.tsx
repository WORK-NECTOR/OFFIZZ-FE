'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.css';
import leftarrow from '../../../../public/leftarrow.png';
import rightarrow from '../../../../public/rightarrow.png';

function RecapPage() {
  const [write, setWrite] = useState(false);
  const conditions = ['최고였어', '좋았어', '괜찮았어', '별로였어', '힘들었어'];
  const onClickWrite = () => {
    setWrite(true);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Tab />
      <div className={styles.backgroundSwitch}>
        <div className={styles.topSwitch}>
          <div className={styles.daySwitch}>
            <Image src={leftarrow} alt="arrow" width={40} height={40} />
            day 1
            <Image src={rightarrow} alt="arrow" width={40} height={40} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={styles.recapWrapper}>
            <div className={styles.recapTop}>
              <div className={styles.recapTitle}>회고</div>
              <div className={styles.recapBtn} onClick={onClickWrite}>
                작성
              </div>
            </div>
            <div className={styles.recapMiddle}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={styles.middleWork}>
                  <div className={styles.middleTitle}>work</div>
                  <div className={styles.middleBox}>
                    <div>
                      <div className={styles.middleSub}>총 업무 시간</div>
                      <div className={styles.middleSub}>컨디션</div>
                    </div>
                    <div className={styles.middleSubBox}>
                      <div className={styles.middleSubTime}>8시간</div>
                      {!write && (
                        <div className={styles.notWrite}>
                          아직 작성 전이에요.
                        </div>
                      )}
                      {write && (
                        <div style={{ display: 'flex' }}>
                          {conditions.map((condition) => (
                            <div
                              key={condition}
                              className={styles.middleSubCondition}
                            >
                              {condition}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div />
                  </div>
                </div>
                <div className={styles.middleWork}>
                  <div className={styles.middleTitle}>vacation</div>
                  <div className={styles.middleBox}>
                    <div>
                      <div className={styles.middleSub}>완료한 여행</div>
                      <div className={styles.middleSub}>컨디션</div>
                    </div>
                    <div className={styles.middleSubBox}>
                      <div className={styles.middleSubTime}>8시간</div>
                      {!write && (
                        <div className={styles.notWrite}>
                          아직 작성 전이에요.
                        </div>
                      )}
                      {write && (
                        <div style={{ display: 'flex' }}>
                          {conditions.map((condition) => (
                            <div
                              key={condition}
                              className={styles.middleSubCondition}
                            >
                              {condition}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 미들 */}
            {/* {write ? <>
              <div style={{marginTop:'3rem'}}>
            <div className={styles.middleTitle}>여행 기록</div>
            <div className={styles.photo}>사진</div>
            </div>
            </>:''} */}
            {/* 마지막 */}
            <div className={styles.bottom}>
              <div className={styles.bottomTitle}>YWT 회고</div>
              <div className={styles.bottominputBox}>
                <div className={styles.bottomSub}>Y 한 일</div>
                {!write && (
                  <div className={styles.bottomNotWrite}>
                    아직 작성 전이에요.
                  </div>
                )}
                {write && (
                  <input
                    className={styles.bottomInput}
                    placeholder="오늘 한 일을 작성해주세요."
                  />
                )}
              </div>
              <div className={styles.bottominputBox}>
                <div className={styles.bottomSub}>W 배운 점</div>
                {!write && (
                  <div className={styles.bottomNotWrite}>
                    아직 작성 전이에요.
                  </div>
                )}
                {write && (
                  <input
                    className={styles.bottomInput}
                    placeholder="오늘 배운 점을 작성해주세요."
                  />
                )}
              </div>
              <div className={styles.bottominputBox}>
                <div className={styles.bottomSub}>T 다음에 할 일</div>
                {!write && (
                  <div className={styles.bottomNotWrite}>
                    아직 작성 전이에요.
                  </div>
                )}
                {write && (
                  <input
                    className={styles.bottomInput}
                    placeholder="다음에 할 일을 작성해주세요."
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecapPage;
