import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './vision.module.scss';

const Vision = () => {

    const { visionImage } = useStaticQuery(
        graphql`
            query {
                visionImage: file(relativePath: { eq: "Our-Vision.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
    );

    return (
        <div className={styles.vision}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h2>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/" className={styles.btn}>SEE MORE</Link>
                </div>
            </div>
            <BgImage image={getImage(visionImage)} className={styles.right} />
        </div>
    )
}

export default Vision
