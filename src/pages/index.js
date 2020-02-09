import React from 'react'
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"
import BlogSection from "../components/blogSection"
import StyledBackgroundSection from "../components/bgImg"
import Slickslider from "../components/slider"

import '../styles/styles.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection />
    <BlogSection />
    <div className="container">
      <Slickslider />
    </div>
  </Layout>
)


export default IndexPage
