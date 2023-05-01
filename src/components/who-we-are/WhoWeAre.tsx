import React from 'react';
import styles from './WhoWeAre.module.scss';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import { PersonCard } from './person-card/PersonCard';
import person1 from './../../assets/images/person-1.png';

export const WhoWeAre = () => {
  return (
    <div className={styles.content}>
      <div className={styles.headers}>
        <HeaderWithLines text="who" />
        <HeaderOutlined text="we are" />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.videoWrapper}></div>
        <div className={styles.photosWrapper}>
          <PersonCard imgSrc={person1} title="In-house legal counsel, portfolio board advisor and M&A lead for VOS9X and the White Bay Group." experience="He plays a leadership role in managing the funds operation, and is responsible for the firm’s ongoing legal work, represents the firm's key stakeholders on significant business transactions, 
          and advises the board of directors of multiple portfolio companies within VOS9X.
Zvi is a member of the Israeli and New York Bar Association, and served in a special forces unit in the IDF." />
        </div>
      </div>
    </div>
  );
};
