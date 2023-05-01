import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from "./PlusButton.module.scss"
import { IconContext } from 'react-icons';
import { FiPlus } from 'react-icons/fi';

export const PlusButton: React.FC<DefaultButtonPropsType> = ({  ...restProps}) => {
  return (
<IconContext.Provider value={{ color: '#24303B', size: '2rem' }}>
        <button className={styles.button} {...restProps}>
              <FiPlus />
            </button>
          </IconContext.Provider>
  )
}

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;