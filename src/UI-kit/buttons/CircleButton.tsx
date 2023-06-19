import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './CircleButton.module.scss';
import { IconContext } from 'react-icons';

export const CircleButton: React.FC<DefaultButtonPropsType & { icon: JSX.Element}> = ({icon,
  ...restProps
}) => {
  return (
    <IconContext.Provider value={{ color: '#24303B', size: '1.4rem' }}>
      <button className={styles.button} {...restProps}
      >
        <div>
        {icon}
        </div>
      </button>
    </IconContext.Provider>
  );
};

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
