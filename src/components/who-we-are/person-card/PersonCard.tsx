import React, { useState } from 'react';
import styles from './PersonCard.module.scss';
import { PlusButton } from '../../../UI-kit/buttons/PlusButton';

export const PersonCard: React.FC<PersonCardProps> = ({title, experience, imgSrc}) => {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imgOutline}></div>
        <div>
          <img src={imgSrc} alt="" />
          {!sideBarVisible &&<PlusButton
            onClick={() => {
              setSidebarVisible(true);
            }}
          />}
        </div>
      </div>
      {sideBarVisible && <div className={styles.modal}>
        <div className={styles.sidebar}>
          <h2>{title}</h2>
          <div className={styles.main}>
            <div>Experience</div>
            <div>{experience}</div>
          </div>
        </div>
        <div className={styles.sidebarBtn}>
        <PlusButton
            onClick={() => {
              setSidebarVisible(false);
            }}
          />
        </div>
        </div>}
    </div>
  );
};


type PersonCardProps = {
title: string;
experience: string;
imgSrc: string
};