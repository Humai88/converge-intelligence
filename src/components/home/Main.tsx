import React, { useEffect, useState } from 'react';
import styles from './HomeSection.module.scss';
import main from './../../assets/images/main-bg.svg';
import { BackgroundMain } from '../../UI-kit/BackgroundMain';
import { Talents } from '../../UI-kit/Talents';
import { Ways } from '../../UI-kit/Ways';
import { Technology } from '../../UI-kit/Technology';
import { Culture } from '../../UI-kit/Culture';
import ReactTextTransition from 'react-text-transition';

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyframes = [
    { text: '', color: '#fff' },
    { text: 'talent', color: '#D0E6A4' },
    { text: 'ways of working', color: '#FB887B' },
    { text: 'technology', color: '#FEDD95' },
    { text: 'culture', color: '#CDABDA' },
  ];

  const intervalTime = 3000;
  useEffect(() => {
    if (currentIndex === keyframes.length) {
      setCurrentIndex(0);
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        {currentIndex !== 0 ? (
          <>
            <h2 className={styles.text}>combining</h2>
            <div>
              <ReactTextTransition
                className={styles.coloredText}
                style={{
                  color: `${keyframes[currentIndex % keyframes.length].color}`,
                }}
              >
                {keyframes[currentIndex % keyframes.length].text}
              </ReactTextTransition>
            </div>
            <h2 className={styles.text}>for innovation</h2>
          </>
        ) : (
          <h2
            className={`${styles.text} ${styles.mainHeader}`}
            style={{ color: `${keyframes[0].color}` }}
          >
            We Leverage <br /> the power of highly
            <br /> diverse teams
          </h2>
        )}
      </div>
      <img src={main} />
      {/* <div className={styles.imageWrapper}>
        <BackgroundMain />
        <Talents />
        <Ways />
        <Technology />
        <Culture />
      </div> */}
    </div>
  );
};
