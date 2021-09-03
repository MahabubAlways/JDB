import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import * as styles from './clients.module.scss'

const Clients = () => {
    return (
        <div className={styles.clients}>
            <h2>Clients</h2>
            <div className={styles.client}>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/pizza-hunt.jpg" alt="pizza-hut" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/tacobell.jpg" alt="tacobell" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/pf-change.jpg" alt="pf-change" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/Pandora.jpg" alt="Pandora" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/paho.jpg" alt="paho" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/departmento.jpg" alt="departmento" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/cba.jpg" alt="cba" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/apex.jpg" alt="apex" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/cbn.png" alt="cbn" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/cmb.jpg" alt="cmb" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/gda.jpg" alt="gda" />
                </div>
                <div className={styles.logo}>
                    <StaticImage className={styles.image} src="../../../images/clients/boolchands.jpg" alt="boolchands" />
                </div>
            </div>
        </div>
    )
}

export default Clients
