import React from 'react'
import PropTypes from 'prop-types'
import HeadRoom from 'react-headroom'
import { Box, Text, Button, ResponsiveContext } from 'grommet'
import { Menu } from 'grommet-icons'
import { Link } from 'gatsby'

const Header = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <HeadRoom>
      <Box
        pad="medium"
        elevation="large"
        direction="row"
        align="center"
        background="brand"
      >
        <Box margin={{ right: '16px' }}>
          <Button
            gap="none"
            icon={<Menu color="white" />}
            plain
            onClick={() => setOpen(!isOpen)}
          />
        </Box>
        <Box margin={{ right: '48px' }}>
          <Text color="white">City Bienes Raíces</Text>
        </Box>
        <ResponsiveContext.Consumer>
          {size =>
            size === 'medium' || size === 'large' ? (
              <>
                <Link to="/">
                  <Button label="Inicio" plain color="white" />
                </Link>
              </>
            ) : null
          }
        </ResponsiveContext.Consumer>
      </Box>
    </HeadRoom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
