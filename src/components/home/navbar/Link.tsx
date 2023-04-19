import React from 'react'
import styles from "./Link.module.scss"

export const Link: React.FC<LinkProps> = ({text}) => {
  return (
    <li className={styles.link}>{text}</li>
  )
}


type LinkProps ={
  text: string
}