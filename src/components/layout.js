import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import icon32 from '../../assets/favicon.ico'

import './new-design.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'BrainBase Blogg',
              content:
                'Blogg post fra BrainBase - et nettverk for av selvstendige konsulenter, for selvstendige konsulenter.',
            },
            {
              name: 'keywords',
              content:
                'content="brainbase, blogg, blog, selvstendig, konsulent, konsulenter, nettverk, selvstendig konsulenter, finn, bedrift, oppdrag, oslo, bergen, trondheim, norge, javascript, react, angular, c#, .net, java',
            },
          ]}
          link={[{ rel: 'icon', href: `${icon32}` }]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
