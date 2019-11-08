/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'src/styles/theme'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
