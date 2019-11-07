import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import heroImage from 'src/images/hero.jpg'

const useStyles = makeStyles({
  image: {
    height: 300,
    width: '100%',
    backgroundImage: `url(${heroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
})

export default function HeroImage() {
  const classes = useStyles()
  return <div className={classes.image}></div>
}
