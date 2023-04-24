import React from 'react';
import styles from './Carousel.module.scss';
import { CarouselItem } from './CarouselItem';
import img1 from './../../../assets/images/1.svg';
import img2 from './../../../assets/images/2.svg';
import img3 from './../../../assets/images/3.svg';
import img4 from './../../../assets/images/4.svg';
import img5 from './../../../assets/images/5.svg';
import img6 from './../../../assets/images/6.svg';
import img7 from './../../../assets/images/7.svg';
import img8 from './../../../assets/images/8.svg';
import img9 from './../../../assets/images/9.svg';
import { Parallax } from 'react-scroll-parallax';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const Carousel = () => {
  return (
    <Parallax speed={-5}>
    <div className={styles.carousel}>
      <div className={styles.slideTrack}>
        <div className={styles.items}>
          {images.map(img => {
            return (
              <div key={img} className={styles.item}>
                <CarouselItem img={img} />
              </div>
            );
          })}
        </div>
        <div className={styles.items}>
          {images.map(img => {
            return (
              <div key={img} className={styles.item}>
                <CarouselItem  img={img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </Parallax >
  );
};
