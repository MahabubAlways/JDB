import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React, { useState } from 'react';
import * as styles from './BgSlider.module.scss';

const BgSlider = () => {

    const { Image1, Image2, Image3 } = useStaticQuery(
        graphql`
            query {
                Image1: file(relativePath: { eq: "slide-1.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                Image2: file(relativePath: { eq: "slide-2.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                Image3: file(relativePath: { eq: "slide-3.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
        );

        const slides = [
            {
                title: "Marketing And Creative Services (B2B and B2C)",
                desc: "Everything you need to get your brand seen and look good doing it. We create and manage your visual and written content to present a polished, cohesive brand image.",
                image: getImage(Image1)
            },
            {
                title: "Social Media Management",
                desc: "We analyze, develop, and manage your social media presence, including content optimization, user engagement, and graphics.",
                image: getImage(Image2)
            },
            {
                title: "SEO/SEM",
                desc: "We develop SEO/SEM strategies to help you accomplish your goals with web marketing, web analytics, content strategy planning, link building, and keyword optimization.",
                image: getImage(Image3)
            },
            {
                title: "Paid Media",
                desc: "Increase lead generation and reach new audiences with paid media. We develop and manage your paid media campaigns for optimal ROI. ",
                image: getImage(Image1)
            },
            {
                title: "Brand Positioning",
                desc: "Differentiate your brand and target different audiences with brand positioning.",
                image: getImage(Image2)
            },
            {
                title: "Content Development",
                desc: "We develop your content strategy and create content that aligns with your company's brand and values.",
                image: getImage(Image3)
            },
            {
                title: "Design and Creative",
                desc: "Strengthen your brand's image with professionally produced logos, brand guides, and other expertly crafted content.",
                image: getImage(Image1)
            },
            {
                title: "Video Production Services",
                desc: "Increase engagement with professional scripted, filmed, acted and produced videos for your brand.",
                image: getImage(Image2)
            },
        ]


        const [selected, setSelected] = useState(0);
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
        <BgImage image={slides[selected].image} className={styles.BgSlider}>
            <div className={styles.content}>
                <h2>{slides[selected].title}</h2>
                <p>{slides[selected].desc}</p>
            </div>
            <div className={styles.sliderNav}>
                <button aria-label="Previous Slide"
                  onClick={() => Minus()}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button aria-label="Next Slide"
                  onClick={() => Plus()}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </BgImage>
    )
}

export default BgSlider
