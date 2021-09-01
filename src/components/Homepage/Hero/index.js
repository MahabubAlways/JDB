import { Link } from 'gatsby'
import React from 'react'
import ChargeAhed from '../../../images/Charge-Ahead.jpg'
import * as styles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContent}>
                <h1>Charge Ahead!</h1>
                <p>The best agency for your brand. Come to see all services for you.</p>
                <Link to="/" className={styles.HeroBtn}>SEE MORE</Link>
            </div>
            <div className={styles.rightContent} style={{backgroundImage: "url(" + ChargeAhed + ")"}}>

            </div>
        </div>
    )
}

export default Hero
