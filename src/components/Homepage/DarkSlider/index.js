import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            title: 'Development White-Label and B2C',
            Desc: 'Even the best product or service can be unsuccessful if customers can&apos;t successfully use the company&apos;s website. We create websites, mobile apps, and software that optimize the user experience and aesthetics with professional development services.',
            image: getImage(Image1)
        },
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
    const currentSlideNum = selected + 1

    function Plus(){
      if(selected >= slides.length - 1){
        setSelected(0);
      }else{
        setSelected(selected + 1);
      }
    }
    function Minus(){
      if(selected <= 0){
        setSelected(slides.length - 1);
      }else{
        setSelected(selected - 1);
      }
    }

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.slideNum}>{currentSlideNum.toString().padStart(2, "0")}</span>
                    <div className={styles.content}>
                        <h2>{slides[selected].title}</h2>
                        <p>{slides[selected].Desc}</p>
                        <div>
                            <Link to="/" className={`btnWhite ${styles.seeBtn}`}>See More</Link>
                        </div>
                        <div className={styles.buttonGrid}>
                            <button aria-label="Previous Slide"
                            onClick={() => Minus()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>{`${currentSlideNum.toString().padStart(2, "0")}/${slides.length.toString().padStart(2, "0")}`}</span>
                            <button aria-label="Next Slide"
                            onClick={() => Plus()}
                            >
                            <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <GatsbyImage className={styles.sliderImg} image={slides[selected].image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DarkSlider
