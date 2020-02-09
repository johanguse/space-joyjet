import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageAboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-us.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className="about-us-img" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ImageAboutUs
