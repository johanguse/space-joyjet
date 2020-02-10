import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Button from "../button"
import './_bgImg.scss';

import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-space-dark.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 1920) {
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
                              className="home-hero"
                              fluid={imageData}
                              backgroundColor={`#040e18`}
            >
              <div className="container">
                <div className="hero-joyjet">
                  <h1 className="title-hero">Space<span className="blue-dot">.</span></h1>
                  <p className="subtitle-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Quisque molestie elit at lacus…</p>
                  <Button buttonText = "Click" />
                </div>
              </div>
              <div className="container-fluid trending-today d-flex align-items-end">
                <div className="container">
                  <div className="trending-today-container">
                    <h3 className="trending-today-title">
                      Treading<br />
                      <span>Today</span>
                    </h3>
                    <div className="trending-today-item">
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing
                    ligula eget dolor.
                    </div>
                    <div className="trending-today-item">
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing
                    ligula eget dolor.
                    </div>
                    <div className="trending-today-item">
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing
                    ligula eget dolor.
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
        )
      }
    }
  />
)



export default StyledBackgroundSection
