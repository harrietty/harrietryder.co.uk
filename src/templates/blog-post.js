import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'

import './blog-post.css';

export default function BlogPost ({data}) {
  const {html} = data.markdownRemark;
  const {tags, title, date, description} = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div id='blogArea'>
        <div className='blogHeader'>
          <h1>{title}</h1>
          {date && <h6 className='blogDate'>Posted on: {date}</h6>}
          {description && <h6 className='blogDate'>{description}</h6>}
        </div>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "Do MMM, YYYY"),
        tags
        description
      }
    }
  }
`