import { graphql } from 'gatsby'
import React from 'react'
import { ClientSlider, Future, GetInTouch, Hero, HeroBottom, HomeServices, TrustedPartner, Vision } from '../components/Homepage'
import Layouts from '../components/Layouts'

const Page = ({data}) => {
  const { seo } = data.wpPage
  const sections = data.wpPage.PostFields.sections;

  console.log('Sections', sections)

  return (
    <Layouts path={data.wpPage.uri} title={seo.title} description={seo?.metaDesc}>

        {sections.map((section, index) => {
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
              return <Future key={index} data={section} />;

            case 'page_Postfields_Sections_HomeVision':
              return <Vision key={index} data={section} />;

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
  query getPageData($id: String) {
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

export default Page
