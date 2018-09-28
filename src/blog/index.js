import React from "react";
import {Link, graphql} from "gatsby";

export default function BlogHomepage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
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
  );
}

export const listingsQuery = graphql`
  query listingsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
