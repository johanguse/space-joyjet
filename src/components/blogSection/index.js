import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"
import './_blogSection.scss';

function SlickNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button type='button' className='slick-next pull-right'
    onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 45 45'><path fill='#4a90e2' d='M14.063 10.145l1.82-1.707L30.938 22.5 15.883 36.563l-1.82-1.696L27.288 22.5zm0 0'/></svg>
    </button>
  );
}

function SlickPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button type='button' className='slick-prev pull-left'
    onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 45 45'><path fill='#4a90e2' d='M30.938 10.145l-1.82-1.707L14.062 22.5l15.054 14.063 1.82-1.696L17.712 22.5zm0 0'/></svg>
    </button>
  );
}


function BlogSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
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