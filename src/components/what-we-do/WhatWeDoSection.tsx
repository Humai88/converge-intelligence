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
      <div className={styles.headers}>
        <HeaderWithLines text="what" />
        <HeaderOutlined text="we do" />
      </div>
      <div className={styles.cardsWrapper}>
        <Parallax speed={-7}>
          <Card
            header="Staff augmentation"
            subHeader={'Fill and open role'.toUpperCase()}
            description="Expand your team with Istanbuls top tech talent, seamlessly integrated into your Uk based team."
          >
            <Data />
          </Card>
        </Parallax>
        <Parallax speed={5}>
          <Card
            header="Agile team"
            subHeader={'Time and Material'.toUpperCase()}
            description="Have a dedicated engineer team deliver your project with award winning expertise on a T&M basis."
          >
            <Design />
          </Card>
        </Parallax>
        <Parallax speed={-7}>
          <Card
            header="Discover and Delivery"
            subHeader={'Fixed scope'.toUpperCase()}
            description="Let us take full ownership of your project with a set budget and timeframe."
          >
            <Data />
          </Card>
        </Parallax>
          <Card
            header="Full stack software engineering"
            subHeader="USER CENTERED EXPERIENCES"
            description="We build digital experiences that are personalised and natural; like an extension."
          >
            <Design />
          </Card>
          <Card
            header="Data Engineering"
            subHeader="USER CENTERED EXPERIENCES"
            description="We build digital experiences that are personalised and natural; like an extension."
          >
            <Design />
          </Card>
      </div>

      <div className={styles.headerBottom}>
        <HeaderOutlined text="we use" />
      </div>
      <Carousel />
    </div>
  );
};
