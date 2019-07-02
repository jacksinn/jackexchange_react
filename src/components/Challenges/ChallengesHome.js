import React from 'react'
import Grid from '@material-ui/core/Grid';
import Challenge from './Challenge'

export default function Challenges(props) {
  let challenges = [
    {
      'name': 'Install a package with Composer',
    }
  ]

  return (
    <Grid container spacing={4}>
      {
        // Iterating over the lessons to output
        challenges.map(challenge => {
          return <Grid item key={challenge.id} xs={12} sm={6} md={4}>
            <Challenge name={challenge.name}></Challenge>
          </Grid>

        })
      }
    </Grid>
  )
}