import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import Layouts from '../components/Layouts';
import ImageContent from '../components/Services/ImageContent';
import ServicesHero from '../components/Services/ServicesHero';

const Services = () => {
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
    <Layouts path={"/services"} title={"Services"} description={""}>
        <ServicesHero />
        {
          ContentForServices.map((item, index) => {
            return(
              <ImageContent title={item.title} content={item.content} image={item.image} BGBlack={item.BGBlack} ImgLeft={item.ImgLeft} />
            )
          })
        }
    </Layouts>
  )
}

export default Services
