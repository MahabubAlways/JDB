import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import * as styles from './DarkSlider.module.scss';

const DarkSlider = () => {

    const { Image1, Image2 } = useStaticQuery(
        graphql`
            query {
                Image1: file(relativePath: { eq: "dummy-dev.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                Image2: file(relativePath: { eq: "dummy-app.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
    );

    const slides = [
        {
            title: 'Web Development',
            Desc: 'We build and maintain your website from the ground up to ensure the best user experience.',
            image: getImage(Image2)
        },
        {
            title: 'App Development',
            Desc: 'Our custom apps are scalable, flexible, and tailored to your business and help you reach your business goals.',
            image: getImage(Image1)
        },
        {
            title: 'Software Development',
            Desc: 'We develop custom software for your business to engage with your customers, clients, and employees.',
            image: getImage(Image2)
        }
    ]

    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.content}>
                        <h2>Development White-Label and B2C</h2>
                        <p>Even the best product or service can be unsuccessful if customers can&apos;t successfully use the company&apos;s website. We create websites, mobile apps, and software that optimize the user experience and aesthetics with professional development services.</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.tab}>
                        <div className={styles.tabs}>
                            <ul>
                                {slides.map((item, index) => {
                                    return(
                                        <li key={index} className={selected === index ? styles.active : ''}>
                                            <button onClick={() => setSelected(index)}>{item.title}</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <h3>{slides[selected].title}</h3>
                                <p>{slides[selected].Desc}</p>
                                <Link to="/" className={`btnBlack ${styles.btn}`}>See More</Link>
                            </div>
                            <div className={styles.imageContainer}>
                                <GatsbyImage className={styles.sliderImg} image={slides[selected].image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DarkSlider