import React from 'react';
import styles from './Card.module.scss';

export const Card: React.FC<CardProps> = ({
  img,
  header,
  subHeader,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={img} />
      <h4>{header}</h4>
      <span>{subHeader}</span>
      <p>{description}</p>
    </div>
  );
};

type CardProps = {
  img: string;
  header: string;
  subHeader: string;
  description: string;
};
