import React from 'react';
import styles from './WhereWeDevelopSection.module.scss';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import map from "./../../assets/images/World-data.svg"
export const WhereWeDevelopSection = () => {
  return (
    <div id="whereWeAre" className={styles.content}>
      <HeaderWithLines text="where" />
      <HeaderOutlined text="we are" />
      <div className={styles.map}>
        <img src={map} alt="map" />
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.bottomHeader}>
          Blending expertise for exceptional results
        </p>
        <p className={styles.bottomText}>
          We believe that innovation is fuled by blending expertise from
          different fields,  <br/>  backgrounds and industiroes. We know that building
          tomorrows technology requires a team effort, <br/>  which is why we prioritse
          collaboration and ownership in everything we do.
        </p>
      </div>
    </div>
  );
};
