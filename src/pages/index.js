import React from 'react'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Compra y renta de propiedades en México" />
      <HeroImage />
      <Typography variant="h2">Encuentra tu casa</Typography>
    </Layout>
  )
}

export default IndexPage
