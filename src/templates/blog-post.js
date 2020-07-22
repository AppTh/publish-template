import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const categories =  get(this, 'props.data.allContentfulCategory.nodes')
    const plugs = get(this, 'props.data.allContentfulPlug.edges').map(edge => edge.node)
    const feet = get(this, 'props.data.allContentfulFooterFoot.nodes')
  
    return (
      <Layout location={this.props.location} categories={categories} plugs={plugs} feet={feet}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    allContentfulCategory {
      nodes {
        name
        nameId
        tags
      }
    }
    allContentfulFooterFoot {
      nodes {
        content {
          childMarkdownRemark {
            html
          }
        }
        title
      }
    }
    allContentfulPlug {
      edges {
        node {
          id
          body {
            childMarkdownRemark {
              html
            }
          }
          slug
          title
          publishDate
        }
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
