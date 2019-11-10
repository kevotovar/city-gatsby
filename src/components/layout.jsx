/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Grommet } from 'grommet'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <Grommet>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
        <Header siteTitle="City bienes raíces" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            paddingTop: 64,
          }}
        >
          {children}
        </div>
      </div>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
