import React from 'react';
import styles from './HeaderOutlined.module.scss';
import { Fade } from 'react-awesome-reveal';

export const HeaderOutlined: React.FC<HeaderOutlinedProps> = ({ text }) => {
  return (
    <Fade direction="up">
      <div className={styles.wrapper}>
        <h3>{text}</h3>
      </div>
    </Fade>
  );
};

type HeaderOutlinedProps = { text: string };
