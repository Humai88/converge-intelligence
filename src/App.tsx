import React from 'react';
import styles from './App.module.scss';
import { HomeSection } from './components/home/HomeSection';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <div className={styles.content}>
      <HomeSection />
    </div>
    </ParallaxProvider>
  );
}

export default App;
