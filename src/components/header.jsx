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
        elevation="small"
        direction="row"
        align="center"
        background="white"
      >
        <Box margin={{ right: '8px' }}>
          <Button
            gap="none"
            icon={<Menu />}
            plain
            onClick={() => setOpen(!isOpen)}
          />
        </Box>
        <Box fill="horizontal" margin={{ right: '8px' }}>
          <Text>City Bienes Raíces</Text>
        </Box>
        <ResponsiveContext.Consumer>
          {size =>
            size === 'medium' || size === 'large' ? (
              <>
                <Link to="/">
                  <Button label="Inicio" plain />
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
