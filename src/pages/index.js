import React from 'react'
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSection from "../components/blogSection"
import StyledBackgroundSection from "../components/bgImg"
import About from "../components/about"

import '../styles/styles.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection />
    <BlogSection />
    <About />
  </Layout>
)


export default IndexPage
