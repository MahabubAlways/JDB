import { graphql, Link, useStaticQuery } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './trustedpartner.module.scss';

const TrustedPartner = () => {
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
        <div className={styles.TrustedPartner}>
            <BgImage image={getImage(partnerImage)} className={styles.Image} />
            <div className={styles.ContentContainer}>
                <div className={styles.Content}>
                    <h2>More than an agency, a trusted partner</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                </div>
                <div>
                    <Link to="/" className={styles.seeBtn}>See More</Link>
                </div>
            </div>
        </div>
    )
}

export default TrustedPartner
