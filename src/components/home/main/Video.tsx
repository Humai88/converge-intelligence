import React from 'react'
import videoBg from './../../../assets/video/vide0-bg-2.mp4'
import styles from './Main.module.scss'

export const Video = () => {
  return (
    <video
    className={styles.video}
    src={videoBg}
    autoPlay
    loop
    muted
></video>
  )
}

