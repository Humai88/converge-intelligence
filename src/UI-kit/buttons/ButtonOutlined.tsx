import React from 'react'
import styles from "./ButtonOutlined.module.scss"

export const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({text, icon}) => {
  return (
    <button className={styles.button}>{icon}<p>{text}</p></button>
  )
}

type ButtonOutlinedProps = {
  text: string,
  icon?: JSX.Element;
}