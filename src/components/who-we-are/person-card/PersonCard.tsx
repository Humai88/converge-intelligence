import React, { useState } from 'react';
import styles from './PersonCard.module.scss';
import { CircleButton } from '../../../UI-kit/buttons/CircleButton';
import { FiPlus, FiX } from 'react-icons/fi';

export const PersonCard: React.FC<PersonCardProps> = ({
  title,
  experience,
  imgSrc,
}) => {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseOver={e => {
        setIsHovering(true);
      }}
      onMouseOut={e => {
        setIsHovering(false);
      }}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.imgOutline}></div>
        <div>
          <img src={imgSrc} alt={imgSrc} />
          {!sideBarVisible && (
            <div className={styles.mainBtn}>
             {isHovering && <CircleButton
                icon={<FiPlus />}
                onClick={() => {
                  setSidebarVisible(true);
                }}
              />} 
            </div>
          )}
        </div>
      </div>
      {sideBarVisible && (
        <div className={styles.modal}>
          <div className={styles.sidebar}>
              <h2>{title}</h2>
              <div className={styles.main}>
                <div>Experience</div>
                <div>{experience}</div>
              </div>
          </div>

          <div className={styles.sidebarBtn}>
            <CircleButton
              icon={<FiX />}
              onClick={() => {
                setSidebarVisible(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

type PersonCardProps = {
  title: string;
  experience: string;
  imgSrc: string;
};
