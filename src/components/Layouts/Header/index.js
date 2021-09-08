import useWindowSize from '@charlietango/use-window-size';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";
import React, { useState } from 'react';
import * as styles from './header.module.scss';

//{(width > 768 ? <TabItem /> : null)}

const Header = ({path}) => {
    const { width } = useWindowSize();
    const [nav, setNav] = useState(false);
    const toggle = () => setNav(!nav);
    
    const Desktop = () => {
        return(
            <div className={`${styles.navbar} ${path === '/' ? styles.homeNav : ''}`}>
                <ul>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/">OUR WORK</Link></li>
                    <li><Link to="/">ABOUT US</Link></li>
                </ul>
                <button className={styles.navButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.25 31.71"><g data-name="Layer 2"><g data-name="Capa 1"><rect width="66.25" height="8.92" /><rect x="27.71" y="22.8" width="38.54" height="8.92" /></g></g></svg>
                </button>
            </div>
        )
    }
    const Mobile = () => {
        return(
            <div className={styles.mobNav}>
                <button className={styles.navButton} onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.25 31.71"><g data-name="Layer 2"><g data-name="Capa 1"><rect width="66.25" height="8.92" /><rect x="27.71" y="22.8" width="38.54" height="8.92" /></g></g></svg>
                </button>
                <div className={`${styles.mobNavContainer} ${nav ? styles.active : ''}`}>
                    <div className={styles.logo}>
                        <Link aria-label="logo" to="/">
                            <img src="/images/JDB-Logo-Black.png" alt="Logo" />
                        </Link>
                    </div>
                    <button className={styles.crossBtn} onClick={toggle}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul>
                        <li><Link to="/">SERVICES</Link></li>
                        <li><Link to="/">OUR WORK</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Link aria-label="logo" to="/">
                        <img src="/images/JDB-Logo-Black.png" alt="Logo" />
                    </Link>
                </div>
                {(width > 768 ? <Desktop /> : <Mobile />)}
            </div>
        </header>
    )
}

export default Header
