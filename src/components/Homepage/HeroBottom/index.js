import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './herobottom.module.scss'

const HeroBottom = () => {
    return (
        <div className={styles.HeroBottom}>
            <div className={styles.left}>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Linkedin</a></li>
                </ul>
            </div>
            <div className={styles.middle}>
                <ul>
                    <li>Growth</li>
                    <li>Marketing & Creative</li>
                    <li>Development</li>
                </ul>
            </div>
            <div className={styles.right}>
                <button className={styles.searchBtn}>
                    Search
                    <FontAwesomeIcon className={styles.faSearch} icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default HeroBottom
