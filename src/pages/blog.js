import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { PostDate } from "../components/shared/styled";

const Description = styled.p`
  font-style: italic;
  font-size: 0.8em;
`;
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
              <PostDate>({node.frontmatter.date})</PostDate>
              <Description>{node.frontmatter.description}</Description>
            </p>
          );
        })}
      </div>
    </Layout>
  );
}

BlogHomepage.propTypes = {
  data: PropTypes.object,
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
