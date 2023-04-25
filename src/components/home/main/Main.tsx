import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import ReactTextTransition from 'react-text-transition';
import { Talent } from '../graphics/Talent';
import { Ways } from '../graphics/Ways';
import { Tech } from '../graphics/Tech';
import { Culture } from '../graphics/Culture';
import { Final } from '../graphics/Final';
import { ButtonOutlined } from '../../../UI-kit/buttons/ButtonOutlined';

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyframes = [
    {
      text: 'talent',
      color: '#61E7CD',
      subHeader: 'Finding the talent',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'ways of working',
      color: '#FB887B',
      subHeader: 'Finding ways of working',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'technology',
      color: '#FEC977',
      subHeader: 'Finding technology',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'culture',
      color: '#A987BC',
      subHeader: 'Finding culture',
      subText:
        'We Leverage the power of highly diverse teams with the skills, backgrounds, expertise to solve complex problems.',
    },
    {
      text: 'final',
      color: '#FFF',
      subHeader: '.',
      subText: '',
    },
  ];

  const intervalTime = 5500;
  useEffect(() => {
    if (currentIndex === keyframes.length-1) {
      return
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
        <div className={styles.final}>
            <Final/>
            <h2
              className={styles.textFinal}
              style={{ color: `${keyframes[4].color}` }}
            >
              We Leverage
              <br /> the power of highly
              <br /> diverse teams
            </h2>
            <ButtonOutlined onClick={()=>{setCurrentIndex(0)}} text='Watch again'/>
        </div>
      ) : (
        <>
          <div className={styles.textWrapper}>
              <h2 className={styles.text}>combining</h2>
              <br/>
              <br/>
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
              <br/>
              <br/>
              <h2 className={styles.text}>for innovation</h2>

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

          </div>
        </>
      )}

      <div className={styles.image}>{currentIndex === 0 && <Talent />}
      {currentIndex === 1 && <Ways />}
      {currentIndex === 2 && <Tech />}
      {currentIndex === 3 && <Culture />}
      </div> 

    </div>
  );
};

