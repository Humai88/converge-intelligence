import React from 'react'
import styles from './HomeSection.module.scss'
import logo from "./../../assets/images/logo-1.svg"

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}
