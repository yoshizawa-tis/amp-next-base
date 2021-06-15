import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../conf/theme';
import Layout from '../lib/layout/layout1';

import Amplify from 'aws-amplify'
import awsconfig from '../src/aws-exports'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig)

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {/* <AmplifyAuthenticator> */}
        <React.Fragment>
          <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout title="System Name">
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </React.Fragment>
      {/* </AmplifyAuthenticator> */}
    </>
  );
}
