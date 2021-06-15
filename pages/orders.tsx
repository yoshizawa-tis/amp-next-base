import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import React from 'react'
import RecentOrders from '../components/dashboard/RecentOrders'
import Paper from '../lib/parts/Paper'

export default function Home() {
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
            <RecentOrders />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
