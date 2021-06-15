import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import React from 'react'
import HookTest from '../components/hooks'
import Paper from '../lib/parts/Paper'

export default function Hooks() {
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
            <HookTest/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
