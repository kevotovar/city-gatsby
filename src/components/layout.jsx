/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Grommet } from 'grommet'

import theme from 'src/styles/theme'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <Grommet theme={theme} full>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
        <Header siteTitle="City bienes raíces" />
        {children}
      </div>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
