import React, { useRef, useState } from 'react';
import styles from './HomeSection.module.scss';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { FiMenu } from 'react-icons/fi';
import { Navbar } from './navbar/Navbar';
import { CSSTransition } from 'react-transition-group';

export const HomeSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div id="home" className={styles.content}>
      <CSSTransition
        in={showMenu}
        nodeRef={nodeRef}
        timeout={1000}
        classNames={{
          enterActive: `${styles.navbarAppear}`,
          exitActive: `${styles.navbarHide}`,
        }}
        mountOnEnter
        unmountOnExit
      >
        <Navbar innerRef={nodeRef} onClick={() => setShowMenu(false)} />
      </CSSTransition>
      <Header
        btnText="Menu"
        icon={<FiMenu size={20} />}
        onClick={() => setShowMenu(true)}
      />
      <Main />
    </div>
  );
};
