import React from 'react'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello World</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage

export const query = graphql`
query SiteMeta {
    site {
        siteMetadata {
          title
          desc
        }
    }
}
`
