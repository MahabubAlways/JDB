import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './vision.module.scss';

export const fragment = graphql`
  fragment Vision on WpPage_Postfields_Sections_HomeVision {
    buttonLabel
    buttonUrl
    content
    fieldGroupName
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const Vision = ({data}) => {
    const {content, image, buttonLabel, buttonUrl} = data

    return (
        <div className={styles.vision}>
            <div className={styles.left}>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
                <div className={styles.btnContainer}>
                    <Link to={buttonUrl} className={styles.btn}>{buttonLabel}</Link>
                </div>
            </div>
            <BgImage image={getImage(image.localFile)} className={styles.right} />
        </div>
    )
}

export default Vision
