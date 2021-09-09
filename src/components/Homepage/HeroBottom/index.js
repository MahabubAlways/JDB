import { graphql, Link } from 'gatsby';
import React from 'react';
import * as styles from './herobottom.module.scss';

export const fragment = graphql`
  fragment HeroBottom on WpPage_Postfields_Sections_HomeHeroBottom {
    buttonLabel
    buttonUrl
    title
    social {
      title
      url
    }
    fieldGroupName
  }
`;

const HeroBottom = ({data}) => {
    const {title, social, buttonLabel, buttonUrl} = data
    return (
        <div className={styles.heroBg}>
            <div className={styles.HeroBottom}>
                <div className={styles.bannerTitle}>
                    <p>{title}</p>
                </div>
                
                <div className={styles.socialLinks}>
                    <ul>
                        {
                            social.map((item, index) => {
                                return <li key={index}><a href={item.url}>{item.title}</a></li>
                            })
                        }
                    </ul>
                </div>
                <div className={styles.middle}>
                    <p className={styles.startButton}><Link to={buttonUrl}>{buttonLabel}</Link></p>
                </div>
            </div>
        </div>
    )
}

export default HeroBottom
