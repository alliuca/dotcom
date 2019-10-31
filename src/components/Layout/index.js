import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../../images/favicon.png'

import '../../theme'
import { GlobalStylesUtils } from '../../theme/utils';
import { GlobalStylesVariables } from '../../theme/settings';
import { GlobalStyles } from '../../theme/base';
import Layout from './theme'
import Header from './../Header'
import Footer from './../Footer'

const LayoutComponent = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        >
          <html lang="en" />
          <link rel="icon" type="image/png" href={favicon} />
          <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        </Helmet>
        <GlobalStylesUtils />
        <GlobalStylesVariables />
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Layout itemScope itemType="http://schema.org/Organization">
          {children}
        </Layout>
        <Footer />
      </>
    )}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
