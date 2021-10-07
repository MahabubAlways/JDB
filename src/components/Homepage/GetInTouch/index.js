import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import GlobalContactForm from '../../GlobalContactForm';
import * as styles from './GetInTouch.module.scss';

export const fragment = graphql`
  fragment GetInTouch on WpPage_Postfields_Sections_HomeContact {
    fieldGroupName
    content
  }
`;

const GetInTouch = ({data}) => {
        return (
            <div id="contactForm" className={styles.GetInTouch}>
              <div className={styles.wrapper}>
                <div className={styles.top} dangerouslySetInnerHTML={{ __html: data?.content }} />
                <div className={styles.bottomLeft}>
                  <StaticImage src="../../../images/icon-logo.png" alt="A dinosaur" />
                </div>
                <div className={styles.bottomRight}>
                  <GlobalContactForm label={true} homeForm={true} />
                </div>
              </div>
            </div>
        )
}

export default GetInTouch
