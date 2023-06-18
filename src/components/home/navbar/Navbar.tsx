import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Navbar.module.scss';
import { Header } from '../header/Header';
import { FiX } from 'react-icons/fi';
import { Fade, Slide } from 'react-awesome-reveal';
import { LinkItem } from './LinkItem';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Navbar: React.FC<NavbarProps> = ({
  innerRef,
  onClick,
  ...restProps
}) => {

  return (
    <div ref={innerRef} className={styles.wrapper} {...restProps}>
      <Fade direction="up" delay={300}>
        <Header btnText="Close" icon={<FiX size={20} />} onClick={onClick} />
      </Fade>
      <Slide direction="up" delay={300}>
        <ul>
          <Link
            onClick={onClick}
            activeClass="active"
            to="whatWeDo"
            spy={true}
            smooth={true}
            offset={0}
            duration={1100}
          >
            <LinkItem text="what we do" />
          </Link>
          <Link
            onClick={onClick}
            activeClass="active"
            to="whoWeAre"
            spy={true}
            smooth={true}
            offset={0}
            duration={1100}
          >
            <LinkItem text="who we are" />
          </Link>
          <Link
            onClick={onClick}
            activeClass="active"
            to="whereWeAre"
            spy={true}
            smooth={true}
            offset={0}
            duration={1100}
          >
            <LinkItem text="where we are" />
          </Link>
          <Link
            onClick={onClick}
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={1100}
          >
            <LinkItem text="contact us" />
          </Link>
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
  innerRef?: React.MutableRefObject<null>;
};
