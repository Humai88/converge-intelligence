import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { HomeSection } from './components/home/HomeSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import { WhatWeDoSection } from './components/what-we-do/WhatWeDoSection';
import { Video } from './components/home/main/Video';
import { WhoWeAre } from './components/who-we-are/WhoWeAre';
import { Loader } from './UI-kit/loader/Loader';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <ParallaxProvider>
      {/* <Video /> */}
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <HomeSection />
          <WhatWeDoSection />
          <WhoWeAre />
        </div>
      )}
    </ParallaxProvider>
  );
}

export default App;
