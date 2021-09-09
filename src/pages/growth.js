import React from 'react';
import Layouts from '../components/Layouts';
import CaseStudies from "../components/Services/CaseStudies";
import ImageContent from '../components/Services/ImageContent';
import ServicesHero from '../components/Services/ServicesHero';

const Services = () => {
  return (
    <Layouts path={"/growth"} title={"Growth"} description={""}>
        <ServicesHero />
        <ImageContent />
        <CaseStudies />
    </Layouts>
  )
}

export default Services
