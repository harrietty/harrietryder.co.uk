import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PostDate } from "../components/shared/styled";

const PublishingPlatform = styled.span`
  color: #adadad;
  padding-left: 5px;
  font-size: 12px;
`;

const PostLink = ({ post }) => {
  return (
    <li key={post.node.frontmatter.title}>
      {post.node.frontmatter.url ? (
        <>
          <a
            href={post.node.frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.node.frontmatter.title}
            <i
              className="fa fa-external-link"
              style={{ paddingLeft: "4px" }}
            ></i>
          </a>

          <PublishingPlatform>
            ({post.node.frontmatter.platform})
          </PublishingPlatform>
        </>
      ) : (
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      )}

      <PostDate>{post.node.frontmatter.date}</PostDate>
    </li>
  );
};

PostLink.propTypes = {
  post: PropTypes.object,
};

export default PostLink;
