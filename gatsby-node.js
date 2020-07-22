const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const articleIndex = path.resolve('./src/templates/article-index.js')
    resolve(
      graphql(
        `
        {
          allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
          }
          allContentfulCategory {
            nodes {
              name
              nameId
              tags
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const categories = result.data.allContentfulCategory.nodes

        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        categories.forEach(category => {
          createPage({
            path: `/${category.nameId}`,
            component: articleIndex,
            context: {
              tags: category.tags
            }
          })
        })
      })
    )
  })
}
