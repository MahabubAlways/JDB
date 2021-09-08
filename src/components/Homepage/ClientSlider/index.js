import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Carousel from "react-multi-carousel";
import * as styles from './ClientSlider.module.scss';


const ClientSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1025 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 465 },
          items: 5,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        },
    };

    return (
        <div className={styles.ClientSlider}>
            <h2>Clients</h2>
            <div className={styles.client}>
            <Carousel
                ssr
                arrows={true}
                infinite={true}
                autoPlay={false}
                itemClass="image-item"
                responsive={responsive}
            >
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/pizza-hunt.jpg" alt="pizza-hut" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/tacobell.jpg" alt="tacobell" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/pf-change.jpg" alt="pf-change" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/paho.jpg" alt="paho" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/pandora.jpg" alt="Pandora" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/departmento.jpg" alt="departmento" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/cba.jpg" alt="cba" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/boolchands.jpg" alt="boolchands" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/apex.jpg" alt="apex" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/cbn.jpg" alt="cbn" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/cmb.jpg" alt="cmb" />
                </div>
                <div >
                    <StaticImage className={styles.image} src="../../../images/clients/gda.jpg" alt="gda" />
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default ClientSlider
