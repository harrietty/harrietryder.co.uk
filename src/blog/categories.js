import React from 'react';
import {graphql} from 'gatsby';

export default function Categories ({data}) {
  const tags = data.allMarkdownRemark.edges.reduce((acc, { node }) => {
    node.frontmatter.tags.forEach(tag => {
      if (acc[tag]) acc[tag]++;
      else acc[tag] = 1;
    });
    return acc;
  }, {});
  return (
    <div>
      <h1>all the categories...</h1>
      {Object.keys(tags).map((tag, i) => <p key={i}>{`${tag} (${tags[tag]})`}</p>)}
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`;
