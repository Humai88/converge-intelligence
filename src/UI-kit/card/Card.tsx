import React from 'react';
import styles from './Card.module.scss';

export const Card: React.FC<CardProps> = ({
  children,
  header,
  subHeader,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <h4>{header}</h4>
      <span>{subHeader}</span>
      <p>{description}</p>
    </div>
  );
};

type CardProps = {
  children: React.ReactNode | React.ReactNode[];
  header: string;
  subHeader: string;
  description: string;
};
