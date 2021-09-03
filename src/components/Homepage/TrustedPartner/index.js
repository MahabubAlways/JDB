import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import * as styles from './trustedpartner.module.scss'

const TrustedPartner = () => {
    return (
        <div className={styles.TrustedPartner}>
            <div className={styles.Image}>
                <StaticImage src="../../../images/Trusted-Partner.jpg" alt="Trusted Partner" />
            </div>
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
