import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import * as styles from './vision.module.scss';
import BackgroundImage from 'gatsby-background-image'

const Vision = () => {

    const visionBanner = useStaticQuery(
        graphql`
            query {
                visionImage: file(relativePath: { eq: "Our-Vision.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );
    const visionBg = visionBanner.visionImage.childImageSharp.fluid;
    return (
        <div className={styles.vision}>
            <BackgroundImage fluid={visionBg}>
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
            </BackgroundImage>
        </div>
    )
}

export default Vision
