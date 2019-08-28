import React from 'react'
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"
import BlogSection from "../components/blogSection"


import '../styles/styles.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button buttonText = "Click" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <BlogSection />
  </Layout>
)


export default IndexPage
