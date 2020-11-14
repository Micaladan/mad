import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import ImmortalLayout from "../components/ImmortalLayout"

const Immortal = () => (
  <ImmortalLayout>
    <SEO title="Immortal The Invisible War" />
    <h1>Immortal</h1>

    <Link to="/">Go back to the homepage</Link>
  </ImmortalLayout>
)

export default Immortal
