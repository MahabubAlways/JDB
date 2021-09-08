import React from 'react'
import * as styles from './serviceshero.module.scss'

const ServicesHero = () => {
    return (
        <div className={styles.servicesHero}>
            <h1>Growth</h1>
            <div className={styles.herobottom}>
                <div className={styles.left}>
                    <h2>Services</h2>
                </div>
                <div className={styles.right}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero
