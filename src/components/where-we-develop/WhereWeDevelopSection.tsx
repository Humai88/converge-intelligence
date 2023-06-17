import React from 'react';
import styles from './WhereWeDevelopSection.module.scss';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';

export const WhereWeDevelopSection = () => {
  return (
    <div className={styles.content}>
      <HeaderWithLines text="where" />
      <HeaderOutlined text="we are" />
    </div>
  );
};
