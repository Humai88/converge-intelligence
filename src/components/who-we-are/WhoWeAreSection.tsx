import React from 'react';
import styles from './WhoWeAreSection.module.scss';
import { HeaderWithLines } from '../../UI-kit/headers/HeaderWithLines';
import { HeaderOutlined } from '../../UI-kit/headers/HeaderOutlined';
import { PersonCard } from './person-card/PersonCard';
import person1 from './../../assets/images/person-1.png';
import person2 from './../../assets/images/person-2.png';
import person3 from './../../assets/images/person-3.png';
import { VideoCard } from './video-card/VideoCard';

export const WhoWeAreSection = () => {
  return (
    <div id="whoWeAre" className={styles.content}>
      <div className={styles.headers}>
        <HeaderWithLines text="who" />
        <HeaderOutlined text="we are" />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.videoWrapper}>
          <VideoCard />
        </div>
        <div className={styles.photosWrapper}>
          <div className={styles.person1}>
            <PersonCard
              imgSrc={person1}
              title="In-house legal counsel, portfolio board advisor and M&A lead for Converge Intelligence."
              experience="He plays a leadership role in managing the funds operation, and is responsible for the firm’s ongoing legal work, represents the firm's key stakeholders on significant business transactions, 
          and advises the board of directors of multiple portfolio companies within  Converge Intelligence.
Zvi is a member of the Israeli and New York Bar Association, and served in a special forces unit in the IDF."
            />
          </div>

          <div className={styles.person2}>
            <PersonCard
              imgSrc={person2}
              title="Technical lead for Converge Intelligence."
              experience="He plays a leadership role in managing the funds operation, and is responsible for the firm’s ongoing legal work, represents the firm's key stakeholders on significant business transactions, 
          and advises the board of directors of multiple portfolio companies within  Converge Intelligence.
Zvi is a member of the Israeli and New York Bar Association, and served in a special forces unit in the IDF."
            />
          </div>

          <div className={styles.person3}>
            <PersonCard
              imgSrc={person3}
              title="Principal engineer for Converge Intelligence."
              experience="He plays a leadership role in managing the funds operation, and is responsible for the firm’s ongoing legal work, represents the firm's key stakeholders on significant business transactions, 
          and advises the board of directors of multiple portfolio companies within  Converge Intelligence.
Zvi is a member of the Israeli and New York Bar Association, and served in a special forces unit in the IDF."
            />
          </div>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <HeaderOutlined text="Thinkers. Doers." />
        <HeaderOutlined text="Builders." />
        <p className={styles.bottomHeader}>Technology is a team sport</p>
        <p className={styles.bottomText}>
          We are passionate about combining our skills, coming together<br/> as one
          to solve technology challenges at any scale.
        </p>
      </div>
    </div>
  );
};
