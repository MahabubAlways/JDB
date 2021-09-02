import * as React from "react"
import Future from "../components/Homepage/Future"
import Hero from "../components/Homepage/Hero"
import HeroBottom from "../components/Homepage/HeroBottom"
import Services from "../components/Homepage/Services"
import TrustedPartner from "../components/Homepage/TrustedPartner"
import Layouts from "../components/Layouts"

const IndexPage = (props) => {
  //console.log(props)
  return (
    <Layouts path={props.uri}>
      <Hero />
      <HeroBottom />
      <TrustedPartner />
      <Services />
      <Future />
    </Layouts>
  )
}

export default IndexPage
