import Head from 'next/head'

import Grid from '@material-ui/core/Grid';
import Paper from '../lib/parts/Paper';

import Chart from '../components/dashboard/Charts';
import Deposits from '../components/dashboard/Deposits';
import RecentOrders from '../components/dashboard/RecentOrders';

export default function Home() {
  const fixedHeight = 240;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper height={fixedHeight}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper height={fixedHeight}>
            <Deposits />
          </Paper>
        </Grid>
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
