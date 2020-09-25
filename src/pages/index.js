import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { getFormattedDate } from '../utils/dateUtil'
import Hero from '../components/hero';

const Post = ({ post, link }) => {
  const formattedDate = getFormattedDate(post.node.frontmatter.date)

  return (
    <div className="card card--no-image">
      <div className="card__content-wrapper">
        <h2 className="heading heading--level-3">
          <span className="typography__link-wrapper">
          <Link to={link} className="typography__link-header">
            {post.node.frontmatter.title}
          </Link>
          </span>
        </h2>
        <p className="subtitle">Publisert: {formattedDate}</p>
        <p className="paragraph">{post.node.excerpt}</p>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section">
      <div className="content-wrapper">
        <Hero title="Dropp mellomleddet"/>
        {data.allMarkdownRemark.edges.map((node) => (
          <Post
            post={node}
            link={`/post${node.node.fields.slug}`}
            key={node.node.frontmatter.title + node.node.frontmatter.date}
          />
        ))}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
            readingTime {
              time
            }
          }
          frontmatter {
            date
            title
            author
            author_image
            description
          }
        }
      }
    }
  }
`
