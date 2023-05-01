import React from 'react';
import videoBg from './../../../assets/video/bg-slow.mp4';
import styles from './Main.module.scss';

export const Video = () => {
  return (
<div className={styles.videoWrapper}>
<div className={styles.parallaxVideo}>
      <video autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
</div>
  );
};
