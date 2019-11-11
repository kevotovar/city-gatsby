import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid, Box, Heading } from 'grommet'

import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Compra y renta de propiedades en México" />
      <Grid
        columns={['1/2', '1/2']}
        rows={['full']}
        gap="none"
        areas={[
          { name: 'heroText', start: [0, 0], end: [0, 0] },
          { name: 'heroImage', start: [1, 0], end: [1, 0] },
        ]}
      >
        <Box gridArea="heroImage">
          <HeroImage />
        </Box>
        <Box gridArea="heroText" justify="center" pad="small">
          <Heading>Encuentra tu casa</Heading>
        </Box>
      </Grid>
      {/* <Grid container spacing={4} alignItems="stretch">
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
      </Grid> */}
    </Layout>
  )
}

export default IndexPage
