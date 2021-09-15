import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './CaseStudies.module.scss';

export const fragment = graphql`
  fragment CaseStudies on WpPage_Postfields_Sections_GrowthCaseStudies {
    buttonLabel
    buttonUrl
    content
    fieldGroupName
    cases {
      categoryUrl
      category
      caseUrl
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

const CaseStudies = ({data}) => {
    return (
        <>
            <div className={styles.CaseStudies}>
                <div className={styles.sectionContent}>
                    <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                    <Link className={`btnBlack ${styles.SeeBtn}`} to={data?.buttonUrl}>{data?.buttonLabel}</Link>
                </div>
                <div className={styles.oneCase}>
                    <BgImage image={getImage(data.cases[0].image.localFile)} className={styles.Image}>
                        <Link className={styles.category} to="/" >{data.cases[0].category}</Link>
                        <Link to={data.cases[0].caseUrl} className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
            </div>
            <div className={styles.CaseStudies}>
                <div className={`${styles.oneCase} ${styles.twoCase}`}>
                    <BgImage image={getImage(data.cases[1].image.localFile)} className={styles.Image}>
                        <Link className={styles.category} to="/" >{data.cases[1].category}</Link>
                        <Link to={data.cases[1].caseUrl} className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
                <div className={`${styles.oneCase} ${styles.threeCase}`}>
                    <BgImage image={getImage(data.cases[2].image.localFile)} className={styles.Image}>
                        <Link className={styles.category} to="/" >{data.cases[2].category}</Link>
                        <Link to={data.cases[2].caseUrl} className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
            </div>
        </>
    )
}

export default CaseStudies
