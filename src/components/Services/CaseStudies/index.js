import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './CaseStudies.module.scss';

const CaseStudies = () => {
    const { partnerImage } = useStaticQuery(
        graphql`
            query {
                partnerImage: file(relativePath: { eq: "Trusted-Partner.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
    );
    return (
        <>
            <div className={styles.CaseStudies}>
                <div className={styles.sectionContent}>
                    <h2>Case Studies</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <Link className={styles.SeeBtn} to="/">See More</Link>
                </div>
                <div className={styles.oneCase}>
                    <BgImage image={getImage(partnerImage)} className={styles.Image}>
                        <Link className={styles.category} to="/" >Concepts</Link>
                        <Link to="/" className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
            </div>
            <div className={styles.CaseStudies}>
                <div className={`${styles.oneCase} ${styles.twoCase}`}>
                    <BgImage image={getImage(partnerImage)} className={styles.Image}>
                        <Link className={styles.category} to="/" >Concepts</Link>
                        <Link to="/" className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
                <div className={`${styles.oneCase} ${styles.threeCase}`}>
                    <BgImage image={getImage(partnerImage)} className={styles.Image}>
                        <Link className={styles.category} to="/" >Concepts</Link>
                        <Link to="/" className={styles.btn}>
                            <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                        </Link>
                    </BgImage>
                </div>
            </div>
        </>
    )
}

export default CaseStudies
