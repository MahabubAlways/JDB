import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import * as styles from './clients.module.scss'

const Clients = () => {
    return (
        <div className={styles.clients}>
            <h2>Clients</h2>
            <div className={styles.client}>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/pizza-hut.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/Taco-Bell.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/p.f.changs.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/Pandora.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/paho.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/Departmento-di-impuesto.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/centrale-bank-van-aruba.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/apex.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/canadian-bank-note.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/cmb.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/gobierno-di-aruba.png" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/boolchands.png" alt="pizza-hut" />
                </div>
            </div>
        </div>
    )
}

export default Clients
