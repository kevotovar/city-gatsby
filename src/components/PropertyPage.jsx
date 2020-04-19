import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Layout from './layout'

const useStyles = makeStyles(theme => ({
  title: {
    margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px`,
  },
}))

function PropertyPage({ pathContext: { typeOperationText } }) {
  const classes = useStyles()
  return (
    <Layout>
      <Container>
        <Typography variant="h3" component="h1" className={classes.title}>
          {typeOperationText}
        </Typography>
      </Container>
    </Layout>
  )
}

PropertyPage.propTypes = {
  pathContext: PropTypes.shape({
    propertyId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    typeOperationText: PropTypes.string.isRequired,
  }).isRequired,
}

export default PropertyPage
