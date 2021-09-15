import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import * as styles from './hero.module.scss'

export const fragment = graphql`
  fragment Hero on WpPage_Postfields_Sections_HomeHero {
    buttonLabel
    buttonUrl
    content
    imageTitle1
    imageTitle2
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fieldGroupName
  }
`;

const Hero = ({data}) => {
    useEffect(() => {
        // for animation
        gsap.fromTo(".marqueeLeft", {xPercent: "-100"}, {delay: 5, xPercent: "0", yPercent: "-1", duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        gsap.fromTo(".marqueeRight", {xPercent: "100"}, {delay: 5, xPercent: "0", yPercent: "0", duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        // for animation
    }, []);

    const {content, buttonLabel, buttonUrl, image, imageTitle1, imageTitle2} = data

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContent}>
                <div className={styles.ChargeArrow}>
                    <p>CHARGE AHEAD
                    <FontAwesomeIcon className={styles.ChargeArrowDown} icon={faArrowDown} />
                    </p>
                </div>
            </div>
            <div className={styles.middleContent}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <Link to={buttonUrl} className={`btnBlack ${styles.HeroBtn}`}>{buttonLabel}</Link>
            </div>
            <BgImage image={getImage(image.localFile)} className={styles.rightContent}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeLeftInner}>
                        <p className={`marqueeLeft ${styles.marquee}`}>{imageTitle1}</p>
                    </div>
                    <div className={styles.marqueeRightInner}>
                        <p className={`marqueeRight ${styles.marquee}`}>{imageTitle2}</p>
                    </div>
                </div>
            </BgImage>
        </div>
    )
}

export default Hero
