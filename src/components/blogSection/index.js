import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"



function BlogSection() {
  return (
    <StaticQuery
      query={blogPostQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <section className="page-main__section">
            <div className="blog-posts__container">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Link to={node.fields.slug}>
                    <div
                      className="mdc-card--clickable anoun-blog-card"
                      key={node.fields.slug}
                    >
                        <div className="anoun-blog-card-content__container">
                          <h3>{title}</h3>
                          <small>{node.frontmatter.date}</small>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      }}
    />
  )
}

const blogPostQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogSection