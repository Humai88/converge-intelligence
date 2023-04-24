import React from 'react'
import styles from "./HeaderWithLines.module.scss"
import { Parallax } from 'react-scroll-parallax';

export const HeaderWithLines: React.FC<HeaderProps> = ({text}) => {
  return (
    <Parallax speed={-5}>
    <div className={styles.wrapper}>
      <h2>{text}</h2>
    </div>
    </Parallax>
  )
}

type HeaderProps={text: string}