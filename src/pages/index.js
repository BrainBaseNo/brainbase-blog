import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero';
import { graphql } from 'gatsby'
import { Link } from '@reach/router';

const Post = ({ post , link}) => (
  <div className="card card--no-image">
    <div className="card__content-wrapper">
      <p className="subtitle">Publisert {post.node.data.post_date}</p>
      <h3 className="heading heading--level-3"><Link to={link} className="link">{post.node.data.title.text}</Link></h3>
      <p className="paragraph">{post.node.data.content.text.substring(0,300)}</p>
    </div>
  </div>

)
const IndexPage = ( {data} ) => (
  <Layout>
     <Hero />  
    <section class="section">
      <div className="content-wrapper content-wrapper--medium">
      {data.allPrismicPost.edges.map((node) =>
        <Post post={node} link={`post/${node.node.uid}`}/>
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