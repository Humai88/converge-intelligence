import React from 'react'
import styles from './Header.module.scss'
import logo from "./../../../assets/images/logo-1.svg"
import { ButtonOutlined } from '../../../UI-kit/buttons/ButtonOutlined'
import { FiMenu } from "react-icons/fi";


export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ButtonOutlined text="Menu" icon={<FiMenu size={20}/>}/>
    </div>
  )
}
