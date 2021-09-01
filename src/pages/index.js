import * as React from "react"
import Hero from "../components/Homepage/Hero"
import Layouts from "../components/Layouts"

const IndexPage = (props) => {
  return (
    <Layouts path={props.path}>
      <Hero />
    </Layouts>
  )
}

export default IndexPage
