import { graphql } from 'gatsby';
import React from 'react';
import * as styles from './GrowthHero.module.scss';

export const fragment = graphql`
  fragment GrowthHero on WpPage_Postfields_Sections_GrowthHero {
    description
    fieldGroupName
    subTitle
    title
  }
`;

const GrowthHero = ({data}) => {
    return (
        <div className={styles.GrowthHero}>
            <h1>{data.title}</h1>
            <div className={styles.herobottom}>
                <div className={styles.left}>
                    <h2>{data.subTitle}</h2>
                </div>
                <div className={styles.right} dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
        </div>
    )
}

export default GrowthHero
