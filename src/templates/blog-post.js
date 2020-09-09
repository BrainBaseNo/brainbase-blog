import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import { getFormattedDate, getFormattedReadingTime } from '../utils/dateUtil'

import './blog-post-layout.css'

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const formattedDate = getFormattedDate(post.frontmatter.date)
  const formattedReadingTime = getFormattedReadingTime(
    post.fields.readingTime.time
  )
  const { previous, next } = pageContext

  //Todo: Fix profile image when we have a good solution for that.
  //<img src={post.frontmatter.author_image} alt="image of author" />
  return (
    <Layout>
      <article className="content-wrapper content-wrapper--medium">
        <div className="section">
          <header className="post">
            <h1>{post.frontmatter.title}</h1>
            <div className="post-meta">
            <img src={post.frontmatter.author_image} alt="author" />
              <div>
                <p>{post.frontmatter.author}</p>
                <p>
                  {formattedDate} &middot; {formattedReadingTime} min
                </p>
              </div>
            </div>
          </header>

          <section
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr className="horizontal-rule" />
        </div>
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
        author
        author_image
        description
      }
      fields {
        readingTime {
          time
        }
      }
    }
  }
`
