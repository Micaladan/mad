import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h1>Michael's Website</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
