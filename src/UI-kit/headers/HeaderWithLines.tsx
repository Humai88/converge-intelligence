import React from 'react'
import styles from "./HeaderWithLines.module.scss"

export const HeaderWithLines: React.FC<HeaderProps> = ({text}) => {
  return (
    <div className={styles.wrapper}>
      <h2>{text}</h2>
    </div>
  )
}

type HeaderProps={text: string}