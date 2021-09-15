import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import GlobalContactForm from '../GlobalContactForm'
import * as styles from './ContactPage.module.scss'

const ContactPage = () => {
    return (
        <div className={styles.ContactPage}>
            <div className={styles.left}>
                <h1>Contact Us</h1>
                <div className={styles.contact}>
                    <p>Phone: <a href="tel:002211334455">0022 1133 4455</a></p>
                    <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                    <p>Address: 886 Sheppard Ave, Toronto, Canada</p>
                </div>
                <div className={styles.socialIcons}>
                    <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faLinkedinIn} /></span>
                    <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} /></span>
                    <span className={styles.Icons}><FontAwesomeIcon className={styles.socialIcons} icon={faFacebookF} /></span>
                </div>
            </div>
            <div className={styles.right}>
                <GlobalContactForm border={true} label={true} btnClass={'btnBlack'} />
            </div>
        </div>
    )
}

export default ContactPage
