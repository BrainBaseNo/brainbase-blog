import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

//import Tags from '../components/Tags';
import Layout from '../components/layout';
import Hero from '../components/hero';
//import { getFormattedDate } from '../general/dateUtil';

import '../components/new-design.css';
import '../components/new-design-custom.css';

export default function Template(data) {
  const post = data.data.prismicPost.data;
  return (
    <Layout>
      <Hero />
      <section className="section">
        <div className="content-wrapper content-wrapper--medium">
          <Helmet title={`Gatsby Blog`} />
          <div className="post">
            <h1 className="heading heading--level-1">{post.title.text}</h1>
            <p className="subtitle">Publisert: {post.post_date}</p>
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
        post_date
        content{
          html
        }
      }
    }
	}
`;