import React from 'react';
import styles from './WhatWeDoSection.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import { Card } from '../../UI-kit/card/Card';
import { Carousel } from './carousel/Carousel';
import { Data } from '../../UI-kit/graphics/Data';
import { Design } from '../../UI-kit/graphics/Design';

export const WhatWeDoSection = () => {
  return (
    <div id="whatWeDo" className={styles.content}>
      <HeaderWithLines text="what" />
      <HeaderOutlined text="we do" />
      <div className={styles.cardsWrapper}>
        <Parallax speed={-7}>
          <Card
            header="Data Engineering"
            subHeader="CONTEXT & PREDICTION"
            description="We embed data and machine learning into the very fabric of what we build."
          >
            <Data />
          </Card>
        </Parallax>
        <Parallax speed={5}>
          <Card
            header="Design"
            subHeader="USER CENTERED EXPERIENCES"
            description="We build digital experiences that are personalised and natural; like an extension."
          >
            <Design />
          </Card>
        </Parallax>
        <Parallax speed={-7}>
          <Card
            header="Data Engineering"
            subHeader="CONTEXT & PREDICTION"
            description="We embed data and machine learning into the very fabric of what we build."
          >
            <Data />
          </Card>
        </Parallax>
      </div>
      <HeaderOutlined text="we use" />
      <Carousel />
    </div>
  );
};
