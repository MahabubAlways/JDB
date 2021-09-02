import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './footerbottom.module.scss'

const FooterBottom = () => {
    return (
        <div className={styles.footerbottom}>
            <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faLinkedinIn} /></span>
            <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} /></span>
            <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faFacebookF} /></span>
        </div>
    )
}

export default FooterBottom
