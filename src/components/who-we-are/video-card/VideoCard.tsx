import React from 'react';
import styles from './VideoCard.module.scss';
import videoImg from './../../../assets/images/video-cover.png';
import { FiPlay } from 'react-icons/fi';
import { CircleButton } from '../../../UI-kit/buttons/CircleButton';

export const VideoCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoOutline}></div>
        <div>
          <img src={videoImg} alt="video-cover" />
          <div className={styles.mainBtn}>
            <CircleButton icon={<FiPlay />} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
