import * as React from "react"
import Clients from "../components/Homepage/Clients"
import Future from "../components/Homepage/Future"
import GetInTouch from "../components/Homepage/GetInTouch"
import Hero from "../components/Homepage/Hero"
import HeroBottom from "../components/Homepage/HeroBottom"
import Services from "../components/Homepage/Services"
import TrustedPartner from "../components/Homepage/TrustedPartner"
import Vision from "../components/Homepage/Vision"
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
      <Vision />
      <GetInTouch />
      <Clients />
    </Layouts>
  )
}

export default IndexPage
