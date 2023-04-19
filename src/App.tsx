import React from 'react';
import styles from './App.module.scss';
import { HomeSection } from './components/home/HomeSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import { WhatWeDoSection } from './components/what-we-do/WhatWeDoSection';
import { Video } from './components/home/main/Video';

function App() {
  return (
    <ParallaxProvider>
    <div className={styles.content}>
      {/* <Video/> */}
      <HomeSection />
      <WhatWeDoSection/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
