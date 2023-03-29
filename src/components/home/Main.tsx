import React, { useEffect, useState } from 'react';
import styles from './HomeSection.module.scss';
import main from './../../assets/images/main-bg.svg';
import talent from './../../assets/images/talent-full.svg';
import ways from './../../assets/images/ways-full.svg';
import tech from './../../assets/images/tech-full-gr.svg';
import culture from './../../assets/images/culture-full.svg';
import final from './../../assets/images/final.svg';
import ReactTextTransition from 'react-text-transition';
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-scroll-parallax';

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyframes = [
    {
      text: 'talent',
      color: '#D0E6A4',
      subHeader: 'Finding the talent',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
      img: talent,
    },
    {
      text: 'ways of working',
      color: '#FB887B',
      subHeader: 'Finding ways of working',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
      img: ways,
    },
    {
      text: 'technology',
      color: '#FEDD95',
      subHeader: 'Finding technology',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
      img: tech,
    },
    {
      text: 'culture',
      color: '#CDABDA',
      subHeader: 'Finding culture',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
      img: culture,
    },
    {
      text: 'final',
      color: '#FFF',
      subHeader: '.',
      subText: '',
      img: final,
    },
  ];

  const intervalTime = 4000;
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
      {currentIndex === 4 ? (
        <div className={styles.mainHeader}>
          <Parallax speed={-2}>
            <img
              style={{ width: '600px' }}
              src={keyframes[4].img}
              alt={keyframes[4].text}
            />
            <h2
              className={styles.textFinal}
              style={{ color: `${keyframes[4].color}` }}
            >
              We Leverage
              <br /> the power of highly
              <br /> diverse teams
            </h2>
          </Parallax>
        </div>
      ) : (
        <>
          <div className={styles.textWrapper}>
            <Parallax speed={-2}>
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
            </Parallax>
            <Parallax speed={2}>
              <div className={styles.subText}>
                <h3>{keyframes[currentIndex % keyframes.length].subHeader}</h3>
                <div
                  style={{
                    backgroundColor: `${
                      keyframes[currentIndex % keyframes.length].color
                    }`,
                  }}
                ></div>
                <span>
                  {keyframes[currentIndex % keyframes.length].subText}
                </span>
              </div>
            </Parallax>
          </div>
        </>
      )}

      {currentIndex !== 4 && (
        <img
          className={styles.image}
          src={keyframes[currentIndex % keyframes.length].img}
          alt={keyframes[currentIndex % keyframes.length].text}
        />
      )}
    </div>
  );
};
