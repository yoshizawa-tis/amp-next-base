import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import React from 'react'
import RegisterImage from '../components/Images/RegisterImage'
import Query from '../components/Images/Query'
import Paper from '../lib/parts/Paper'

export default function Image() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>
            <Query/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <RegisterImage/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
