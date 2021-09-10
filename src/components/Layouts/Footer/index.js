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
                        <img width={120} height={43} src="/images/JDB-Logo-Black.png" alt="Logo" />
                    </Link>
                    <p>We are a agency global in different parts of the world. <br />Our team is working from Toronto, Bogotá & Dutch Caribbean.</p>

                    <p>Copyright 2021 - 2025. JDB Agency. All Rights Reserved.</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.footerMenu}>
                        <h3>About Us</h3>
                        <ul>
                            <li>Our Blog</li>
                            <li>Careers</li>
                            <li>News</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h3>Services</h3>
                        <ul>
                            <li>Growth</li>
                            <li>Marketing</li>
                            <li>Creative</li>
                            <li>Development</li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h3>Contact</h3>
                        <ul>
                            <li>The Team</li>
                            <li>Canada</li>
                            <li>Aruba</li>
                            <li>Bogotá</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    )
}

export default Footer
