import React from 'react';
import styles from './PersonCard.module.scss';
import person1 from './../../../assets/images/person-1.png';

export const PersonCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imgOutline}></div>
       <div>
       <img src={person1} alt="" />
        <button>Open</button>
       </div>
      </div>
    </div>
  );
};
