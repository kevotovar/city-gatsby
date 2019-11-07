/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
      <Header siteTitle="City bienes raíces" />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          paddingTop: 100,
        }}
      >
        {children}
        <footer style={{ paddingTop: 10 }}>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout