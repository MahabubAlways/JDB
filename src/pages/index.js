import * as React from "react"
import Hero from "../components/Homepage/Hero"
import HeroBottom from "../components/Homepage/HeroBottom"
import TrustedPartner from "../components/Homepage/TrustedPartner"
import Layouts from "../components/Layouts"

const IndexPage = (props) => {
  return (
    <Layouts path={props.path}>
      <Hero />
      <HeroBottom />
      <TrustedPartner />
    </Layouts>
  )
}

export default IndexPage
