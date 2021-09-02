import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import ChargeAhed from '../../../images/Charge-Ahead.jpg'
import * as styles from './hero.module.scss'

const Hero = () => {
    useEffect(() => {
        // for animation
        gsap.fromTo(".marqueeLeft", {xPercent: "-100"}, {xPercent: "-3", duration: 10, ease: "linear", repeat: 0}).totalProgress(0.5);
        gsap.fromTo(".marqueeRight", {xPercent: "100"}, {xPercent: 0, duration: 10, ease: "linear", repeat: 0}).totalProgress(0.5);
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
            <div className={styles.rightContent} style={{backgroundImage: "url(" + ChargeAhed + ")"}}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeLeftInner}>
                        <p className={`marqueeLeft ${styles.marquee}`}>Charge</p>
                    </div>
                    <div className={styles.marqueeRightInner}>
                        <p className={`marqueeRight ${styles.marquee}`}>Ahed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
