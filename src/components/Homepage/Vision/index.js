import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import * as styles from './vision.module.scss'

const Vision = () => {
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
            <div className={styles.right}>
                <StaticImage src="../../../images/Our-Vision.jpg" alt="Trusted Partner" />
            </div>
        </div>
    )
}

export default Vision
