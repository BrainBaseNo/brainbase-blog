import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

//import Tags from '../components/Tags';
import Layout from '../components/layout'
import Hero from '../components/hero'
import { getFormattedDate } from '../components/dateUtil'

import '../components/new-design.css'
import '../components/new-design-custom.css'

export default function Template(data) {
  const post = data.data.prismicPost.data
  const formattedDate = getFormattedDate(post.post_date)
  return (
    <Layout>
      <Hero title={post.title.text} />
      <section className="section">
        <div className="content-wrapper content-wrapper--medium">
          <Helmet title={`Gatsby Blog`} />
          <div className="post">
            <p className="subtitle">Publisert: {formattedDate}</p>
            <article dangerouslySetInnerHTML={{ __html: post.content.html }} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        post_date
        content {
          html
        }
      }
    }
  }
`
