import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './header.module.scss';

const Header = ({path}) => {
    console.log(path)
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Link aria-label="logo" to="/">
                        <StaticImage width={120} loading="eager" src="../../../images/JDB-Logo-Black.png" alt="Logo" />
                    </Link>
                </div>
                <div className={`${styles.navbar} ${path === '/' ? styles.homeNav : ''}`}>
                    <ul>
                        <li><Link to="/">SERVICES</Link></li>
                        <li><Link to="/">OUR WORK</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                    </ul>
                    <button className={styles.navButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.25 31.71"><g data-name="Layer 2"><g data-name="Capa 1"><rect width="66.25" height="8.92" /><rect x="27.71" y="22.8" width="38.54" height="8.92" /></g></g></svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
