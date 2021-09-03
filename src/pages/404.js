import { Link } from "gatsby"
import * as React from "react"
import Layouts from "../components/Layouts"

// markup
const NotFoundPage = () => {
  return (
    <Layouts path={"/not"} title={"404 not Found"} description={""}>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layouts>
  )
}

export default NotFoundPage
