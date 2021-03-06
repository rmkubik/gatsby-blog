import React from 'react'

import PostListing from '../components/postListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing post={node} key={node.id} />
    ))}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            date(formatString: "M/D/YY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
