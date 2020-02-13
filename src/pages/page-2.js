import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderInterns from "../components/header/index2"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <HeaderInterns />
    <div className="container pages-interns">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
