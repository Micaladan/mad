import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h1>Michael's Website</h1>
    <p>Welcome to your new Gatsby site.</p>
    <BackgroundImage>test should go here</BackgroundImage>
    <Link to="/GroceryList/">Check Out the Grocery List Page</Link> <br />
    <Link to="/Immortal">Check Out the Immortal page</Link>
  </Layout>
)

export default IndexPage
