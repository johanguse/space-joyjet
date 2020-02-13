import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderInterns from "../components/header/index2"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/button'

import '../styles/styles.scss';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderInterns />
    <div className="container pages-interns">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      < Button buttonText = "Click me" / >
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default AboutPage
