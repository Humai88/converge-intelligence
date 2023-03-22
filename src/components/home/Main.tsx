import React, { useEffect, useState } from 'react';
import styles from './HomeSection.module.scss';
import main from './../../assets/images/main-bg.svg';
import { BackgroundMain } from '../../UI-kit/BackgroundMain';
import { Talents } from '../../UI-kit/Talents';
import { Ways } from '../../UI-kit/Ways';
import { Technology } from '../../UI-kit/Technology';
import { Culture } from '../../UI-kit/Culture';
import ReactTextTransition from 'react-text-transition';
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-scroll-parallax';

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyframes = [
    { text: '', color: '#fff', subHeader: '', subText: '' },
    {
      text: 'talent',
      color: '#D0E6A4',
      subHeader: 'Finding the talent',
      subText: 'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'ways of working',
      color: '#FB887B',
      subHeader: 'Finding ways of working',
      subText: 'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'technology',
      color: '#FEDD95',
      subHeader: 'Finding technology',
      subText: 'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'culture',
      color: '#CDABDA',
      subHeader: 'Finding culture',
      subText: 'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
  ];

  const intervalTime = 2000;
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
      <Parallax speed={5}>
        <div className={styles.textWrapper}>
          {currentIndex !== 0 ? (
            <>
              <h2 className={styles.text}>combining</h2>
              <div>
                <ReactTextTransition
                  className={styles.coloredText}
                  style={{
                    color: `${
                      keyframes[currentIndex % keyframes.length].color
                    }`,
                  }}
                >
                  {keyframes[currentIndex % keyframes.length].text}
                </ReactTextTransition>
              </div>
              <h2 className={styles.text}>for innovation</h2>
              <div className={styles.subText}>
                <h3>{keyframes[currentIndex % keyframes.length].subHeader}</h3>
                <div style={{backgroundColor: `${keyframes[currentIndex % keyframes.length].color}`}}></div>
                <span>{keyframes[currentIndex % keyframes.length].subText}</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.mainHeader}>
                <h2
                  className={styles.text}
                  style={{ color: `${keyframes[0].color}` }}
                >
                  We Leverage <br /> the power of highly
                  <br /> diverse teams
                </h2>
                <Fade direction="up" duration={1400}>
                  <span className={styles.subHeader}>
                    skills to solve complex problems for our forward thinking
                    partners
                  </span>
                </Fade>
              </div>
            </>
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
      </Parallax>
    </div>
  );
};
