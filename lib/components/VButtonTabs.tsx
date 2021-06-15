import React, { ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  height: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, height, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box height={height} border={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


type TabData = {
  title: string
  children: ReactNode
}
type Props = {
  tabprops: TabData[]
  height: string
}

const VButtonTabs: React.FC<Props> = ({tabprops, height}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <ButtonGroup variant="contained" orientation="vertical" fullWidth color="primary" aria-label="vertical contained primary button group">
            {tabprops.map((tabdata, index) => {
              return (
                <Button key={index} onClick={() => setValue(index)}>{tabdata.title}</Button>
              )
            })}
          </ButtonGroup>
        </Grid>
        <Grid item xs={10}>
          {tabprops.map((tabdata, index) => {
            return (
              <TabPanel key={index} value={value} index={index} height={height}>
                {tabdata.children}
              </TabPanel>
            )
          })}
        </Grid>
      </Grid>
    </div>
  );
}
export default VButtonTabs;