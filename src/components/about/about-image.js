import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageAboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-us.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 500,) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img className="about-us-img img-fluid" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ImageAboutUs
