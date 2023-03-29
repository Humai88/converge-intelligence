import React from 'react';
import styles from "./HeaderOutlined.module.scss"

export const HeaderOutlined: React.FC<HeaderOutlinedProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{text}</h3>
    </div>
  );
};

type HeaderOutlinedProps = { text: string };
