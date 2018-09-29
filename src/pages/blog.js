import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';

export default function BlogHomepage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div>
        <h4>All Blog Posts:</h4>
        {posts.map(({ node }, i) => {
          return (
            <p>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <span className='postDate'>({node.frontmatter.date})</span>
            </p>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex : "\/blog/"}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMM, YYYY")
            tags
          }
        }
      }
    }
  }
`;
