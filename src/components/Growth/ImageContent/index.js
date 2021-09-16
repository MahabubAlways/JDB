import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './ImageContent.module.scss';

export const fragment = graphql`
  fragment ImageContent on WpPage_Postfields_Sections_GrowthImageContent {
    fieldGroupName
    sideBySide {
      content
      buttonLabel
      buttonUrl
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ImageContent = ({data}) => {
    return (
        <div className={styles.sectionImageContent}>
        {
          data?.sideBySide?.map((item, index) => {
            return(
            <div key={index} className={styles.ImageContent}>
                <div className={styles.ContentContainer}>
                    <div className={styles.Content} dangerouslySetInnerHTML={{ __html: item?.content }} />
                    <div>
                        <Link to={item?.buttonUrl} className={`${index % 2 === 0 ? 'btnBlack' : 'btnWhite'} ${styles.seeBtn}`}>{item?.buttonLabel}</Link>
                    </div>
                </div>
                <div className={styles.ImageContainer}>
                    <GatsbyImage className={styles.Image} image={getImage(item.image.localFile)} alt={item?.image?.altText || ''} />
                </div>
            </div>
            )
          })
        }
        </div>
    )
}

export default ImageContent
