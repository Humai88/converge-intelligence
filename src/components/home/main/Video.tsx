import React from 'react';
import videoBg from './../../../assets/video/purple.mp4';
import styles from './Main.module.scss';

export const Video = () => {
  return (
<div className={styles.videoWrapper}>
      <video autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
</div>
  );
};
