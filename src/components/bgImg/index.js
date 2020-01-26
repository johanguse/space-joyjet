import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import './_bgImg.scss';

import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-space.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
            <BackgroundImage Tag="section"
                              className="hero-bg-img"
                              fluid={imageData}
                              backgroundColor={`#040e18`}
            >
              <div className="container">
                <h1>Hello gatsby-background-image</h1>
              </div>
            </BackgroundImage>
        )
      }
    }
  />
)



export default StyledBackgroundSection
