import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Carousel from "react-multi-carousel";
import * as styles from './BgSlider.module.scss';

const BgSlider = () => {

    const { Image1, Image2, Image3, Image4 } = useStaticQuery(
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
                Image4: file(relativePath: { eq: "slide-4.jpg" }) {
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
                image: getImage(Image4)
            },
            {
                title: "Social Media Management",
                desc: "We analyze, develop, and manage your social media presence, including content optimization, user engagement, and graphics.",
                image: getImage(Image1)
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


        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1025 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 465 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
        };

    return (
        <div className={styles.BgSliderWrapper}>
            <Carousel
            ssr
            arrows={true}
            infinite={true}
            autoPlay={false}
            itemClass="image-item"
            responsive={responsive}
            showDots={true}
            >
            {
                slides.map((logo, index) => {
                    return (
                        <BgImage image={logo.image} className={styles.BgSlider}>
                            <div className={styles.content}>
                                <h2>{logo.title}</h2>
                                <p>{logo.desc}</p>
                                <div>
                                <Link to="/" className={`btnWhite ${styles.seeBtn}`}>See More</Link>
                                </div>
                            </div>
                        </BgImage>
                    )
                })
            }
            </Carousel>
        </div>
    )
}

export default BgSlider
