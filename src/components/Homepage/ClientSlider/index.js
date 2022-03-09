import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Carousel from "react-multi-carousel";
import * as styles from './ClientSlider.module.scss';

export const fragment = graphql`
  fragment ClientSlider on WpPage_Postfields_Sections_HomeClients {
    fieldGroupName
    clients {
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ClientSlider = ({data}) => {
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
                arrows={true}
                autoPlay={true}
                infinite={true}
                autoPlay={false}
                itemClass="image-item"
                responsive={responsive}
            >
            {
                data.clients.map((logo, index) => {
                    return <GatsbyImage key={index} image={getImage(logo.image.localFile)} alt={logo.image.altText} />
                })
            }
            </Carousel>
            </div>
        </div>
    )
}

export default ClientSlider
