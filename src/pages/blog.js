import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogHomepage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div>
        <h4>All Blog Posts:</h4>
        {posts.map(({ node }, i) => {
          return (
            <p key={i}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <span className="postDate">({node.frontmatter.date})</span>
              <p className="postDescription">{node.frontmatter.description}</p>
            </p>
          );
        })}
      </div>
    </Layout>
  );
}

BlogHomepage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
            description
          }
        }
      }
    }
  }
`;
