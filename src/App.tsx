import React from 'react';
import styles from './App.module.scss';
import { HomeSection } from './components/home/HomeSection';

function App() {
  return (
    <div className={styles.content}>
      <HomeSection />
    </div>
  );
}

export default App;
