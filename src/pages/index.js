import React from 'react'
import _ from 'lodash';
import Layout from '../components/layout'
import Hero from '../components/hero';
import { graphql } from 'gatsby'
import { Link } from '@reach/router';

const Post = ({ post }) => (
  <div className="card card--no-image">
    <div className="card__content-wrapper">
      <p className="subtitle">Publisert {post.node.data.post_date}</p>
      <Link to={post.node.uid} className="link"><h3 className="heading heading--level-3">{post.node.data.title.text}</h3></Link>
      <p className="paragraph">{post.node.data.content.text.substring(0,300)}</p>
    </div>
  </div>

)
const IndexPage = ( {data} ) => (
  <Layout>
     <Hero text="Fjerner behovet for mellomledd"/>  
    <section class="section">
      <div className="content-wrapper content-wrapper--medium">
      {data.allPrismicPost.edges.map((node) =>
        <Post post={node} />
      )}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query PostQuery{
    allPrismicPost(sort: { fields: [data___post_date], order: DESC }) {
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
`