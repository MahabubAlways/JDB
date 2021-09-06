import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './herobottom.module.scss'

const HeroBottom = () => {
    return (
        <div className={styles.heroBg}>
            <div className={styles.HeroBottom}>
                <div className={styles.bannerTitle}>
                    <p>Do you want to charge your brand?</p>
                </div>
                
                <div className={styles.socialLinks}>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Linkedin</a></li>
                    </ul>
                </div>
                <div className={styles.middle}>
                    <p className={styles.startButton}><a href="/">Start Your Journey Now</a></p>
                </div>
            </div>
        </div>
    )
}

export default HeroBottom
