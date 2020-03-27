import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import { getFormattedDate } from '../utils/dateUtil'

import './blog-post-layout.css'

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const formattedDate = getFormattedDate(post.frontmatter.date)
  const { previous, next } = pageContext

  return (
    <Layout>
      <Hero title={post.frontmatter.title} date={formattedDate} />
      <article className="content-wrapper content-wrapper--medium">
        <section
          className="section post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr className="horizontal-rule" />
      </article>

      <nav className="content-wrapper">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: '0 0 2rem 0',
          }}
        >
          <li>
            {previous && (
              <Link
                to={`/post${previous.fields.slug}`}
                rel="prev"
                className="link link-button"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/post${next.fields.slug}`}
                rel="next"
                className="link link-button"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
