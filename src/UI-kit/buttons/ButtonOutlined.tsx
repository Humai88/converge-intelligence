import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from "./ButtonOutlined.module.scss"

export const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({text, icon,  ...restProps}) => {
  return (
    <button className={styles.button} {...restProps} >{icon}<p>{text}</p></button>
  )
}

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonOutlinedProps = DefaultButtonPropsType & {
  text: string,
  icon?: JSX.Element;
}