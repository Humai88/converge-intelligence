import React from 'react';
import styles from './WhoWeAre.module.scss';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import { PersonCard } from './person-card/PersonCard';

export const WhoWeAre = () => {
  return (
    <div className={styles.content}>
      <div className={styles.headers}>
        <HeaderWithLines text="who" />
        <HeaderOutlined text="we are" />
      </div>
      <div className={styles.personsWrapper}>
        <PersonCard />
      </div>
    </div>
  );
};
