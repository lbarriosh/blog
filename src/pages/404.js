import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page not found" />
      <h1 class="notfound-header">404</h1>
      <h3 class="notfound-text">Nothing to see here!</h3>
      <p>The page you are looking for doesn&#39;t exist. This was probably me 
        relocating a page and forgetting to update the links.</p>
      <p>However, if you are doing something you shouldn't, bear in mind that this page
        generates zero revenue and that you can put your time to a better use.</p>
      <p>Anyway, since you are stuck here, let me offer you a way out:</p>
      <ul>
        <li>go back to the <Link to={`/`}>home page</Link></li>
        <li>learn more <Link to={`/about`}>about me</Link></li>
      </ul>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
