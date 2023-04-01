import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Navbar.module.scss';
import { Header } from '../header/Header';
import { FiX } from 'react-icons/fi';
import { Fade, Slide } from 'react-awesome-reveal';

export const Navbar: React.FC<NavbarProps> = ({innerRef, onClick, ...restProps }) => {
  return (

     <div ref={innerRef} className={styles.wrapper} {...restProps}>
       <Fade direction='up' delay={300}>
      <Header btnText="Close" icon={<FiX size={20} />} onClick={onClick} />
      </Fade>
      <Slide direction='up' delay={400} >
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
      </Slide>
    </div>

  );
};

type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
type NavbarProps = DefaultDivPropsType & {
  onClick: () => void;
  innerRef?: React.MutableRefObject<null>
};
