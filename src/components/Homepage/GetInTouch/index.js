import { graphql } from "gatsby";
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
                <div className={styles.left} dangerouslySetInnerHTML={{ __html: data?.content }} />
                <div className={styles.right}>
                  <GlobalContactForm label={true} />
                </div>
              </div>
            </div>
        )
}

export default GetInTouch
