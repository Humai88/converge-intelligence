import React from 'react';
import styles from './WhatWeDoSection.module.scss';
import { Slide } from 'react-awesome-reveal';
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
      <Slide direction="up">
        <HeaderWithLines text="what" />
      </Slide>
      <Slide direction="down">
        <HeaderOutlined text="we do" />
      </Slide>
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
      <Slide direction="down">
      <HeaderOutlined text="we use" />
      </Slide>
      <Carousel/>
    </div>
  );
};
