import React from 'react'
import styles from "./HeaderWithLines.module.scss"
import { Fade } from 'react-awesome-reveal';

export const HeaderWithLines: React.FC<HeaderProps> = ({text}) => {
  return (
    <Fade direction='down'>
    <div className={styles.wrapper}>
      <h2>{text}</h2>
    </div>
    </Fade>
  )
}

type HeaderProps={text: string}