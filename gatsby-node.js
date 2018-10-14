const path = require('path')
 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
 
  const pages = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
            data{
              title {
                html
                text
              }
              post_date 
              content {
                html
                text
              }
            }
          }
        }
      }
    }
  `)
 
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  pages.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `post/${edge.node.uid}`,
      component: blogPostTemplate,
      context: {
        uid: edge.node.uid
      },
    })
  })
}