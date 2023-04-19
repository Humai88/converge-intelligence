import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Navbar.module.scss';
import { Header } from '../header/Header';
import { FiX } from 'react-icons/fi';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from './Link';

export const Navbar: React.FC<NavbarProps> = ({
  innerRef,
  onClick,
  ...restProps
}) => {
  const links = [
    'what we do',
    'who we are',
    'how we do',
    'where we are',
    'smart calculation',
    'contact us',
  ];
  return (
    <div ref={innerRef} className={styles.wrapper} {...restProps}>
      <Fade direction="up" delay={300}>
        <Header btnText="Close" icon={<FiX size={20} />} onClick={onClick} />
      </Fade>
      <Slide direction="up" delay={300}>
        <ul>
          {links.map(link => {
            return <Link key={link.replace(/ .*/, '')} text={link} />;
          })}
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
