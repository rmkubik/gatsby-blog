import React from 'react'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello World</h1>
    <Img sizes={data.background.sizes} />
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
    background: imageSharp(id :{regex:"/bg.jpeg/"}) {
        sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
        }
    }
}
`
