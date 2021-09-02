import { Link } from "gatsby";
import React from 'react';
import * as styles from './footer.module.scss';
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link aria-label="logo" to="/" className={styles.footerLogo}>
                        <img src="/images/JDB-Logo-Black.png" alt="Logo" />
                    </Link>
                    <p>We are a agency global in different parts of the world. <br />Our team is working from Toronto, Bogotá & Dutch Caribbean.</p>

                    <p>Copyright 2021 - 2025. JDB Agency. All Rights Reserved.</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.footerMenu}>
                        <h3>About Us</h3>
                        <ul>
                            <li><Link to="/">Our Blog</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/">Help Center</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/">Growth</Link></li>
                            <li><Link to="/">Marketing</Link></li>
                            <li><Link to="/">Creative</Link></li>
                            <li><Link to="/">Development</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h3>Contact</h3>
                        <ul>
                            <li><Link to="/">The Team</Link></li>
                            <li><Link to="/">Canada</Link></li>
                            <li><Link to="/">Aruba</Link></li>
                            <li><Link to="/">Bogotá</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    )
}

export default Footer
