const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// This is needed for transforming data when a node is created.
// In this case, we generate and add the slug to each Node
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    // Create the slug from the filepath with this function
    const slug = createFilePath({ node, getNode, basePath: "pages" });

    // Add the new piece of data to the node. The key/values specifies here will be queryable with graphql
    // under the 'fields' property (node.fields.slug)
    createNodeField({
      node,
      name: "slug",
      value: slug.replace("/post/", ""),
    });
  }
};

// This is required to create the individual pages that MD files should generate
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
