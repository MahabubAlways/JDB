import { graphql, Link } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './trustedpartner.module.scss';

export const fragment = graphql`
  fragment TrustedPartner on WpPage_Postfields_Sections_HomeTrustedPartner {
    content
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    buttonLabel
    buttonUrl
    fieldGroupName
  }
`;

const TrustedPartner = ({data}) => {
    
    const {content, image, buttonLabel, buttonUrl} = data

    return (
        <div className={styles.TrustedPartner}>
            <BgImage image={getImage(image.localFile)} className={styles.Image} />
            <div className={styles.ContentContainer}>
                <div className={styles.Content} dangerouslySetInnerHTML={{ __html: content }} />
                <div>
                    <Link to={buttonUrl} className={`btnWhite ${styles.seeBtn}`}>{buttonLabel}</Link>
                </div>
            </div>
        </div>
    )
}

export default TrustedPartner
