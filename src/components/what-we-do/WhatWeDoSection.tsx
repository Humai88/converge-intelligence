import React from 'react';
import styles from './WhatWeDoSection.module.scss';
import data from './../../assets/images/data.svg';
import design from './../../assets/images/design.svg';
import { Parallax } from 'react-scroll-parallax';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import { Card } from '../../UI-kit/card/Card';
import { Carousel } from './carousel/Carousel';

export const WhatWeDoSection = () => {
  return (
    <div className={styles.content}>
        <HeaderWithLines text="what" />
        <HeaderOutlined text="we do" />
      <div className={styles.cardsWrapper}>
        <Parallax speed={-5}>
        <Card
          img={data}
          header="Data Engineering"
          subHeader="CONTEXT & PREDICTION"
          description="We embed data and machine learning into the very fabric of what we build."
        />
        </Parallax>
        <Parallax speed={5}>
            <Card
          img={design}
          header="Design"
          subHeader="USER CENTERED EXPERIENCES"
          description="We build digital experiences that are personalised and natural; like an extension."
        />
         </Parallax>
          <Parallax speed={-5}>
            <Card
          img={data}
          header="Data Engineering"
          subHeader="CONTEXT & PREDICTION"
          description="We embed data and machine learning into the very fabric of what we build."
        />
        </Parallax>
      </div>
      <HeaderOutlined text="we use" />
      <Carousel/>
    </div>
  );
};
