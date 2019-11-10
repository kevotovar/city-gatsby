import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import SEO from '../components/seo'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Compra y renta de propiedades en México" />
      <HeroImage />
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1">
          Encuentra tu casa
        </Typography>
      </Paper>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12}></Grid>
        <StaticQuery
          query={graphql`
            query IndexPropertiesQuery {
              allNocNockProperty(limit: 12) {
                edges {
                  node {
                    id
                    bathrooms
                    bedrooms
                    code
                    constructionSize
                    description
                    hasMortgage
                    latitude
                    location
                    longitude
                    lotSize
                    mediumPictureUrl
                    nocNockId
                    operation
                    parkingSpaces
                    price
                    settlement
                    shortLocation
                    status
                    statusValue
                    type
                    typeCode
                    typeOperationText
                    url
                    zone
                  }
                }
                totalCount
              }
            }
          `}
          render={data =>
            get(data, 'allNocNockProperty.edges', []).map(({ node }) => (
              <Grid item xs={12} sm={6} md={4} key={node.id}>
                <Card className={classes.card}>
                  <CardMedia
                    image={node.mediumPictureUrl}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h4">
                      {node.code}
                    </Typography>
                    <Typography variant="body1">{node.zone}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        />
      </Grid>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
