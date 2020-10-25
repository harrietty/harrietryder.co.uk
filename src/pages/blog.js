import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { generalCategories, technicalCategories } from "../models/categories";
import PostLink from "../components/PostLink";
import styled from "styled-components";
import Layout from "../components/layout";

const PostsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 0px;
  grid-column-gap: 30px;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const PostsSingleListContainer = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`;

const PostsList = styled.ul`
  flex-grow: 1;
  height: 100%;
  background: oldlace;
  padding: 25px 7px;
  border-radius: 9px;
  .with-border {
    border-right: 1px solid lightgray;
  }
  li {
    margin-bottom: 30px;
  }
  @media (max-width: 1020px) {
    padding: 25px;
  }
`;

const PostEmoji = styled.span`
  padding: 0 10px;
  text-decoration: none;
  font-size: 26px;
  @media (max-width: 1155px) {
    font-size: 16px;
  }
`;

const PostHeading = styled.h5`
  font-size: 20px;
  margin-left: 20px;
  @media (max-width: 1155px) {
    font-size: 16px;
  }
`;

const PostTitle = styled.span`
  text-decoration: underline;
  text-decoration-style: wavy;
  -moz-text-decoration-style: wavy;
  -webkit-text-decoration-style: wavy;
  text-decoration-color: lightseagreen;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BlogHomepage({ data }) {
  const generalCategoryKeys = Object.keys(generalCategories);
  const techCategoryKeys = Object.keys(technicalCategories);
  const generalPostsByCategory = {};
  const technicalPostsByCategory = {};
  data.allMarkdownRemark.edges.forEach((post) => {
    const category = post.node.frontmatter.category;
    const isGeneral = generalCategoryKeys.includes(category);
    const isTechnical =
      post.node.frontmatter.technical && techCategoryKeys.includes(category);
    if (isGeneral) {
      if (generalPostsByCategory[category]) {
        generalPostsByCategory[category].push(post);
      } else {
        generalPostsByCategory[category] = [post];
      }
    } else if (isTechnical) {
      if (technicalPostsByCategory[category]) {
        technicalPostsByCategory[category].push(post);
      } else {
        technicalPostsByCategory[category] = [post];
      }
    }
  });

  return (
    <Layout>
      <div>
        <h4>All Blog Posts:</h4>
        <div className="row">
          <div className="column column-95" style={{ margin: "auto" }}>
            <PostsGridContainer>
              {[
                {
                  keys: techCategoryKeys,
                  posts: technicalPostsByCategory,
                  allCategories: technicalCategories,
                },
                {
                  keys: generalCategoryKeys,
                  posts: generalPostsByCategory,
                  allCategories: generalCategories,
                },
              ].map((postType) =>
                postType.keys.map((categoryKey, i) => {
                  return (
                    <GridItem key={categoryKey}>
                      <PostHeading>
                        <PostTitle>
                          {postType.allCategories[categoryKey].title}
                        </PostTitle>
                        <PostEmoji>
                          {postType.allCategories[categoryKey].emoji}
                        </PostEmoji>
                      </PostHeading>
                      <PostsList className={i < 2 && "with-border"}>
                        {postType.posts[categoryKey] ? (
                          postType.posts[categoryKey].slice(0, 5).map((p) => {
                            return (
                              <PostLink
                                post={p}
                                key={p.node.frontmatter.title}
                              />
                            );
                          })
                        ) : (
                          <p>No posts in this category 😢</p>
                        )}
                      </PostsList>
                    </GridItem>
                  );
                })
              )}
            </PostsGridContainer>
            <PostsSingleListContainer>
              <ul>
                {data.allMarkdownRemark.edges.slice(0, 10).map((p) => {
                  return <PostLink post={p} key={p.node.frontmatter.title} />;
                })}
              </ul>
            </PostsSingleListContainer>
          </div>
        </div>
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
      filter: { fileAbsolutePath: { regex: "/blog/|/external-posts/" } }
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
            category
            technical
            url
            platform
          }
        }
      }
    }
  }
`;
