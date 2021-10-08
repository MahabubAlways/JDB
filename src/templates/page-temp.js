import { graphql } from 'gatsby';
import React from 'react';
import { AccordionElement, BgSlider, ClientSlider, DarkSlider, Future, GetInTouch, Hero, HeroBottom, HomeServices, SimpleContent, SlideSection, TrustedPartner, Vision } from '../components/Homepage';
// import { CaseStudies, GrowthHero, ImageContent } from "../components/Growth";
// import { ClientSlider, Future, GetInTouch, Hero, HeroBottom, HomeServices, TrustedPartner, Vision } from '../components/Homepage';
import Layouts from '../components/Layouts';

const PageTemp = ({data}) => {
  const { seo } = data.wpPage
  const sections = data.wpPage.PostFields.sections;

  //console.log('Sections', sections)

  return (
    <Layouts path={data.wpPage.uri} title={seo.title} description={seo?.metaDesc}>

        {sections?.map((section, index) => {
          const typeName = section.fieldGroupName;
          
          switch (typeName) {
            case 'page_Postfields_Sections_HomeHero':
              return <Hero key={index} data={section} />;

            case 'page_Postfields_Sections_HomeHeroBottom':
              return <HeroBottom key={index} data={section} />;

            case 'page_Postfields_Sections_HomeTrustedPartner':
              return <TrustedPartner key={index} data={section} />;

            case 'page_Postfields_Sections_HomeServices':
              return <HomeServices key={index} data={section} />;

            case 'page_Postfields_Sections_HomeFuture':
              return (
                <>
                    <Future key={index} data={section} />
                    <AccordionElement />
                    <DarkSlider />
                </>
                );

            case 'page_Postfields_Sections_HomeVision':
              return (
                <>
                  <BgSlider />
                  <SimpleContent title="More than an agency, a trusted partner" desc="Are you ready to grow your business with a partner who understands your specific digital marketing needs and will develop a plan tailored to your goals? JDB2M, a 360 digital marketing agency, is that partner. With over a decade of experience, our team will identify the best marketing strategies for your company to meet your goals with efficiency, creativity, and results." />
                  <SlideSection />
                  <Vision key={index} data={section} />
                </>
              );

            case 'page_Postfields_Sections_HomeContact':
              return <GetInTouch key={index} data={section} />;

            case 'page_Postfields_Sections_HomeClients':
              return <ClientSlider key={index} data={section} />;
            

            default:
              return null;
          }
        })}
    </Layouts>
  )
}

export const query = graphql`
  query getPageTempData($id: String) {
    wpPage(id: { eq: $id }) {
      title
      uri
      seo {
        title
        metaDesc
      }
      PostFields {
        sections {
          ...Hero
          ...HeroBottom
          ...TrustedPartner
          ...HomeServices
          ...Future
          ...Vision
          ...GetInTouch
          ...ClientSlider
        }
      }
    }
  }
`

export default PageTemp
