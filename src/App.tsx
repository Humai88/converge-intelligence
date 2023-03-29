import React from 'react';
import styles from './App.module.scss';
import { HomeSection } from './components/home/HomeSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import { WhatWeDoSection } from './components/what-we-do/WhatWeDoSection';

function App() {
  return (
    <ParallaxProvider>
    <div className={styles.content}>
      <HomeSection />
      <WhatWeDoSection/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
