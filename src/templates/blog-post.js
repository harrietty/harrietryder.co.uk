import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const BlogArea = styled.div`
  line-height: 30px;
  width: 60%;
  margin: auto;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

const BlogHeader = styled.div`
  margin: 22px 0;
  h1 {
    font-size: 4rem;
  }
  @media (max-width: 750px) {
    font-size: 3rem;
  }
`;

const ContentArea = styled.div`
  h5 {
    margin-top: 40px !important;
  }

  img.gif {
    margin: 10px auto 45px auto;
    display: block;
  }

  ul,
  li {
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  h3,
  .h3 {
    margin: 2.3rem 0;
  }
`;

const BlogDate = styled.h6`
  background-color: lemonchiffon;
`;

export default function BlogPost({ data }) {
  const { html } = data.markdownRemark;
  const { title, date, description } = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;
  return (
    <Layout meta={{ type: "post", title, description, slug }}>
      <BlogArea>
        <BlogHeader>
          <h1>{title}</h1>
          {date && <BlogDate>Posted on: {date}</BlogDate>}
        </BlogHeader>
        <ContentArea dangerouslySetInnerHTML={{ __html: html }} />
      </BlogArea>
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "Do MMM, YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
