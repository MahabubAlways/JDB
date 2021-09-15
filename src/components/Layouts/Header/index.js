import useWindowSize from '@charlietango/use-window-size';
import { faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";
import React, { useState } from 'react';
import * as styles from './header.module.scss';

//{(width > 768 ? <TabItem /> : null)}

const Header = ({path}) => {
    const { width } = useWindowSize();
    const [nav, setNav] = useState(false);
    const toggle = () => setNav(!nav);
    const [Service, setService] = useState(false);
    const toggleService = () => setService(!Service);
    
    const ServiceMenu = () => {
        return(
            <div className={`${styles.ServiceMenu} ${Service ? styles.active : ''}`}>
                <h3>Services</h3>
                <ul className={styles.dropdown}>
                    <li><Link to="/growth">GROWTH</Link></li>
                    <li><Link to="/marketing">MARKETING</Link></li>
                    <li><Link to="/design-creative">Design & Creative</Link></li>
                    <li><Link to="/development">Development</Link></li>
                </ul>
                <button className={styles.crossBtn} onClick={toggleService}>
                        <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        )
    }

    const Desktop = () => {
        return(
            <div className={`${styles.navbar} ${path === '/' ? styles.homeNav : ''}`}>
                <ul className={styles.menuMain}>
                    <li><Link to="/">Home</Link></li>
                    <li className={styles.dropMenu}><a href="#">Services 	&nbsp;<FontAwesomeIcon icon={faSortDown} /></a>
                        <ul className={styles.dropdown}>
                            <li><Link to="/growth">GROWTH</Link></li>
                            <li><Link to="/marketing">MARKETING</Link></li>
                            <li><Link to="/design-creative">Design & Creative</Link></li>
                            <li><Link to="/development">Development</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">OUR WORK</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
                <button className={styles.navButton} onClick={toggleService}>
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
                        <li><Link to="/growth">GROWTH</Link></li>
                        <li><Link to="/marketing">MARKETING</Link></li>
                        <li><Link to="/design-creative">Design & Creative</Link></li>
                        <li><Link to="/development">Development</Link></li>
                        <li><Link to="/">OUR WORK</Link></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
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
                        <img width={120} height={43} src="/images/JDB-Logo-Black.png" alt="Logo" />
                    </Link>
                </div>
                {(width > 768 ? <Desktop /> : <Mobile />)}
            </div>
            {(width > 768 ? <ServiceMenu /> : null)}
        </header>
    )
}

export default Header
