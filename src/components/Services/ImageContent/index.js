import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './ImageContent.module.scss';

const ImageContent = ({title, content, image, BGBlack, ImgLeft}) => {
    const Images = useStaticQuery(
        graphql`
            query {
                IntegratedBusinessDevelopment: file(relativePath: { eq: "Integrated-Business-Development.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                GrowthStrategies: file(relativePath: { eq: "Growth-Strategies.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                BrandDevelopment: file(relativePath: { eq: "Brand-Development.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                ReputationManagement: file(relativePath: { eq: "Reputation-Management.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                CrisisManagement: file(relativePath: { eq: "Crisis-Management.jpg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
      );
      
      const ContentForServices = [
        {
          title: 'Integrated Business Development',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
          image: Images.IntegratedBusinessDevelopment,
          BGBlack: false,
          ImgLeft: false
        },
        {
          title: 'Growth  Strategies',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
          image: Images.GrowthStrategies,
          BGBlack: true,
          ImgLeft: true
        },
        {
          title: 'Brand Development',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
          image: Images.BrandDevelopment,
          BGBlack: false,
          ImgLeft: false
        },
        {
          title: 'Reputation Management',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
          image: Images.ReputationManagement,
          BGBlack: true,
          ImgLeft: true
        },
        {
          title: 'Crisis Management',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
          image: Images.CrisisManagement,
          BGBlack: false,
          ImgLeft: false
        },
      ]
    return (
        <div className={styles.sectionImageContent}>
        {
          ContentForServices.map((item, index) => {
            return(
            <div key={index} className={styles.ImageContent}>
                <div className={styles.ContentContainer}>
                    <div className={styles.Content}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                    <div>
                        <Link to="/" className={styles.seeBtn}>See More</Link>
                    </div>
                </div>
                <div className={styles.ImageContainer}>
                    <GatsbyImage className={styles.Image} image={getImage(item.image)} alt={item.title} />
                </div>
            </div>
            )
          })
        }
        </div>
    )
}

export default ImageContent
