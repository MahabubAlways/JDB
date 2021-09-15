import { graphql } from "gatsby";
import React from 'react';
import GlobalContactForm from '../../GlobalContactForm';
import * as styles from './GetInTouch.module.scss';

export const fragment = graphql`
  fragment GetInTouch on WpPage_Postfields_Sections_HomeContact {
    fieldGroupName
    title
  }
`;

const GetInTouch = ({data}) => {
        return (
            <div id="contactForm" className={styles.GetInTouch}>
                <h2>{data.title}</h2>
                <GlobalContactForm label={true} />
            </div>
        )
}

export default GetInTouch
