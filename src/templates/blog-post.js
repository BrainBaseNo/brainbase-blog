import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby'

//import Tags from '../components/Tags';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

import '../components/new-design.css';

export default function Template(data) {
  const post = data.data.prismicPost.data;
  return (
    <Layout>
      <Hero />
      <section className="section">
        <div className="content-wrapper content-wrapper--medium">
          <Helmet title={`Gatsby Blog`} />
          <div className="post">
          <h1 className="heading heading--level-1">{post.node.data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}/>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($uid: String!) {
    prismicPost(uid: {eq:$uid}) {
      uid
      data {
        title {
          text
        }
        content{
          html
        }
      }
    }
	}
`;