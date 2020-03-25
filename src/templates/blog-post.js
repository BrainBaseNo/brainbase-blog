import React from 'react'
// import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

//import Tags from '../components/Tags';
import Layout from '../components/layout'
import Hero from '../components/hero'
import { getFormattedDate } from '../utils/dateUtil'

import '../components/new-design.css'
import '../components/new-design-custom.css'

export default function Template({data, pageContext}) {
  const post = data.markdownRemark
  const formattedDate = getFormattedDate(post.frontmatter.date)
  const { previous, next } = pageContext

  return (
    <Layout>
      <article>
      <Hero title={post.frontmatter.title} />
      <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p>
            {formattedDate}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`post/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`post/${next.fields.slug}`} rel="next">
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
