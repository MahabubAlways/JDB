import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import * as styles from './hero.module.scss'

const Hero = () => {

    const { heroImage } = useStaticQuery(
        graphql`
            query {
                heroImage: file(relativePath: { eq: "home-hero.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
    );

    useEffect(() => {
        // for animation
        gsap.fromTo(".marqueeLeft", {xPercent: "-100"}, {delay: 5, xPercent: "0", yPercent: "-1", duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        gsap.fromTo(".marqueeRight", {xPercent: "100"}, {delay: 5, xPercent: "0", yPercent: "0", duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        // for animation
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContent}>
                <div className={styles.ChargeArrow}>
                    <p>CHARGE AHEAD
                    <FontAwesomeIcon className={styles.ChargeArrowDown} icon={faArrowDown} />
                    </p>
                </div>
            </div>
            <div className={styles.middleContent}>
                <h1>Charge Ahead!</h1>
                <p>The best agency for your brand. Come to see all services for you.</p>
                <Link to="/" className={styles.HeroBtn}>SEE MORE</Link>
            </div>
            <BgImage image={getImage(heroImage)} className={styles.rightContent}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeLeftInner}>
                        <p className={`marqueeLeft ${styles.marquee}`}>Charge</p>
                    </div>
                    <div className={styles.marqueeRightInner}>
                        <p className={`marqueeRight ${styles.marquee}`}>Ahead</p>
                    </div>
                </div>
            </BgImage>
        </div>
    )
}

export default Hero
