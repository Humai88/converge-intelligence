import React from 'react'
import styles from './CarouselItem.module.scss';

export const CarouselItem: React.FC<CarouselItemProps> = ({img}) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={img} />
    </div>
  )
}

type CarouselItemProps = {
  img: string
}