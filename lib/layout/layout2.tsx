import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import NLink from 'next/link'

import { menuList } from "../../conf/menu"
import { Button } from '@material-ui/core';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright c "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

type Props = {
    title: string
    children: ReactNode
}

const Layout: React.FC<Props> = ({title, children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
          position="absolute"
          className={classes.appBar}
          color='primary'
      >
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
              {title}
          </Typography>

          {menuList.map((item, index) => {
            if (item.href) {
              return (
                <NLink key={index} href={item.href} passHref>
                  <Button color="inherit">{item.text}</Button>
                </NLink>
              )
            } else {
              return (
                <Button key={index} color="inherit" onClick={() => Auth.signOut()} >{item.text}</Button>
              )
            }
          })}

        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box>
            {children}
          </Box>
          <Box pt={4}>
              <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
