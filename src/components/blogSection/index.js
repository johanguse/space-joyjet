import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"


function BlogSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <StaticQuery
      query={blogPostQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <section className="container page-main__section">
            <div className="blog-posts__container">
              <Slider {...settings}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Link to={node.fields.slug}
                  key={node.fields.slug}
                  >
                    <div className="mdc-card--clickable anoun-blog-card">
                        <div className="anoun-blog-card-content__container">
                          <Img
                            fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                          />
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
              </Slider>
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
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogSection