import React, { ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ButtonGroup, Button } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
}

const ButtonTabs: React.FC<Props> = ({tabprops}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <Box component="div">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          {tabprops.map((tabdata, index) => {
            return (
              <Button key={index} onClick={() => setValue(index)}>{tabdata.title}</Button>
            )
          })}
        </ButtonGroup>
      </Box>
      <Box component="div">
        {tabprops.map((tabdata, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              {tabdata.children}
            </TabPanel>
          )
        })}
      </Box>
    </div>
  );
}
export default ButtonTabs;