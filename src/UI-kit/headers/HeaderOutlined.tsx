import React from 'react';
import styles from "./HeaderOutlined.module.scss"
import { Parallax } from 'react-scroll-parallax';

export const HeaderOutlined: React.FC<HeaderOutlinedProps> = ({ text }) => {
  return (
    <Parallax speed={2}>
    <div className={styles.wrapper}>
      <h3>{text}</h3>
    </div>
    </Parallax>
  );
};

type HeaderOutlinedProps = { text: string };
