import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import * as styles from './services.module.scss'

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.service}>
                <div className={styles.content}>
                    <h2>Growth</h2>
                    <p>Services</p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/" className={styles.btn}>
                        <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                    </Link>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.content}>
                    <h2>Marketing & Creative</h2>
                    <p>Services</p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/" className={styles.btn}>
                        <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                    </Link>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.content}>
                    <h2>Development</h2>
                    <p>Services</p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/" className={styles.btn}>
                        <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services
