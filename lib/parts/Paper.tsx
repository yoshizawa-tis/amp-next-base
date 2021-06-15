import React, { ReactNode } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MuiPaper from '@material-ui/core/Paper';

type Props = {
  height?: number
  children: ReactNode
}

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const Paper: React.FC<Props> = ({height, children}) => {
  const classes = useStyles();
  const heightClass = (height) ? {height: height} : {}

  return (
    <MuiPaper className={classes.paper} style={heightClass}>
      {children}
    </MuiPaper>
  );
};

export default Paper;
