import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import St from '../components/sto/st'

import { stList } from "../components/sto/data"
import { Box } from '@material-ui/core'

export default function Hooks() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Grid container spacing={2}>
          {/* Recent Orders */}
            {stList.map((st, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <St
                    id={st.id}
                    title={st.title}
                    description={st.description}
                    irr={st.irr}
                    term={st.term}
                    target={st.target}
                    value={st.value}
                    limit={st.limit}
                  />
                </Grid>
              )
            })}
        </Grid>
      </Box>
    </>
  )
}
