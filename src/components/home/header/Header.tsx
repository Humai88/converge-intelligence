import React from 'react';
import styles from './Header.module.scss';
import logo from './../../../assets/images/logo-1.svg';
import { ButtonOutlined } from '../../../UI-kit/buttons/ButtonOutlined';

export const Header: React.FC<HeaderProps> = ({ btnText, icon, onClick }) => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.btn}>
        <ButtonOutlined text={btnText} icon={icon} onClick={onClick} />
      </div>
    </div>
  );
};

type HeaderProps = {
  btnText: string;
  icon: JSX.Element;
  onClick: () => void;
};
