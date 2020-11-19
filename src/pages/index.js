import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>The Digital Ocean Shop</h1>
    <p>The Official Digital Ocean Hoodie.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Blog Posts</h2>
      {data.allMdx.nodes.map(({frontmatter}) =>(
          <>
            <p>Date: {frontmatter.date}</p>
            <Link to={frontmatter.slug}>
              <p>Title: {frontmatter.title}</p>
            </Link>
            <p>Author: {frontmatter.author}</p>
            <br />
          </>
      ))}
  </Layout>
)

export default IndexPage


export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        author
        date
        title
        slug
      }
    }
  }
}
`


