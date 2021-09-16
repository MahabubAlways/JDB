import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './footerbottomstyle.module.scss'

const FooterBottom = () => {
    return (
        <div className={styles.footerbottom}>
            <span className={styles.FooterIcons}><FontAwesomeIcon className={styles.FootersocialIcons} icon={faLinkedinIn} /></span>
            <span className={styles.FooterIcons}><FontAwesomeIcon className={styles.FootersocialIcons} icon={faInstagram} /></span>
            <span className={styles.FooterIcons}><FontAwesomeIcon className={styles.FootersocialIcons} icon={faFacebookF} /></span>
        </div>
    )
}

export default FooterBottom
