import React from 'react'
import styles from './HomeSection.module.scss'
import { Header } from './Header'
import { Main } from './Main'

export const HomeSection = () => {
  return (
    <div className={styles.content}>
      <Header/>
      <Main/>
    </div>
  )
}
