import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import Layouts from '../components/Layouts';
import ImageContent from '../components/Services/ImageContent';
import ServicesHero from '../components/Services/ServicesHero';

const Services = () => {
  const Images = useStaticQuery(
    graphql`
        query {
            partnerImage: file(relativePath: { eq: "Trusted-Partner.jpg" }) {
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
      image: Images.partnerImage,
      BGBlack: false,
      ImgLeft: false
    },
    {
      title: 'Growth  Strategies',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      image: Images.partnerImage,
      BGBlack: true,
      ImgLeft: true
    },
    {
      title: 'Brand Development',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      image: Images.partnerImage,
      BGBlack: false,
      ImgLeft: false
    },
    {
      title: 'Reputation Management',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      image: Images.partnerImage,
      BGBlack: true,
      ImgLeft: true
    },
    {
      title: 'Crisis Management',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      image: Images.partnerImage,
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
