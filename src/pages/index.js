import React from 'react'
import _ from 'lodash'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import { Link } from '@reach/router'
import { getFormattedDate } from '../components/dateUtil'

const Post = ({ post, link }) => {
  const formattedDate = getFormattedDate(post.node.data.post_date)
  const excerpt = _.truncate(post.node.data.content.text, {
    length: 300,
    separator: ' ',
  })
  return (
    <div className="card card--no-image">
      <div className="card__content-wrapper">
        <h3 className="heading heading--level-3">
          <Link to={link} className="link">
            {post.node.data.title.text}
          </Link>
        </h3>
        <p className="subtitle">Publisert: {formattedDate}</p>
        <p className="paragraph">{excerpt}</p>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <Hero title="Fjerner behovet for mellomledd" />
    <section class="section">
      <div className="content-wrapper content-wrapper--medium">
        {data.allPrismicPost.edges.map(node => (
          <Post post={node} link={`post/${node.node.uid}`} />
        ))}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query PostQuery {
    allPrismicPost(sort: { fields: [data___post_date], order: DESC }) {
      edges {
        node {
          uid
          data {
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
`
