import React from 'react'
import styles from "./LinkItem.module.scss"

export const LinkItem: React.FC<LinkProps> = ({text}) => {
  return (
    <li className={styles.link}>{text}</li>
  )
}


type LinkProps ={
  text: string
}