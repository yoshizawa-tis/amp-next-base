import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import React from 'react'
import RegisterImage from '../components/Images/RegisterImage'
import Query from '../components/Images/Query'
import Paper from '../lib/parts/Paper'
import RegisterTag from '../components/Images/RegisterTag'
import RegisterCategory from '../components/Images/RegisterCategory'
import RegisterImageTag from '../components/Images/RegisterImageTag'

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
        <Grid item xs={6}>
          <Paper>
            <RegisterCategory/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <RegisterTag/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <RegisterImageTag/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
