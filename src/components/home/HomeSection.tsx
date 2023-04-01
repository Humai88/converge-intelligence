import React from 'react'
import styles from './HomeSection.module.scss'
import { Header } from './header/Header'
import { Main } from './main/Main'


export const HomeSection = () => {
  return (
    <div className={styles.content}>
      <Header/>
      <Main/>
    </div>
  )
}
