import { graphql } from 'gatsby'
import React from 'react'
import ClientSlider from '../components/Homepage/ClientSlider'
import Future from '../components/Homepage/Future'
import GetInTouch from '../components/Homepage/GetInTouch'
import Hero from '../components/Homepage/Hero'
import HeroBottom from '../components/Homepage/HeroBottom'
import HomeServices from '../components/Homepage/HomeServices'
import TrustedPartner from '../components/Homepage/TrustedPartner'
import Vision from '../components/Homepage/Vision'
import Layouts from '../components/Layouts'

const Page = ({data}) => {
  console.log(data)
  const { seo } = data.wpPage

  return (
    <Layouts path={data.wpPage.uri} title={seo.title} description={seo?.metaDesc}>
        <Hero />
        <HeroBottom />
        <TrustedPartner />
        <HomeServices />
        <Future />
        <Vision />
        <GetInTouch />
        <ClientSlider />
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
    }
  }
`

export default Page
