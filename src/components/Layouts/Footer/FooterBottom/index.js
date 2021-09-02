import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './footerbottom.module.scss'

const FooterBottom = () => {
    return (
        <div className={styles.footerbottom}>
            <a aria-label="linkedin" href="http://google.com/" className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faLinkedinIn} /></a>
            <a aria-label="instagram" href="http://google.com/" className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} /></a>
            <a aria-label="facebook" href="http://google.com/" className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faFacebookF} /></a>
        </div>
    )
}

export default FooterBottom
