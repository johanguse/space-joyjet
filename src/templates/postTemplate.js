import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeaderInterns from "../components/header/index2"
import SEO from '../components/seo';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
      />
      <HeaderInterns />
      <section className="container pages-interns">
        <div className="blog-content">
          <div>
            <h1>{frontmatter.title}</h1>
            <span>{frontmatter.date}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
