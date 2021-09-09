import * as React from "react"
import Layouts from "../components/Layouts"

// markup
const NotFoundPage = () => {
  return (
    <Layouts path={"/404"} title={"404 not Found"} description={""}>
      <div style={{width: '84%', margin: '60px auto'}}>
        <h1 style={{fontFamily: 'Barlow', marginBottom: '20px'}}>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layouts>
  )
}

export default NotFoundPage
