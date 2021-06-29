import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, CardHeader, Grid, LinearProgress, Paper } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  contents: {
    marginTop: 5,
    marginBottom: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
});


type Props = {
  id: string
  title: string
  description: string
  irr: string
  term: string
  target: string
  value: number
  limit: number
}
const St: React.FC<Props> = ({
  id,
  title,
  description,
  irr,
  term,
  target,
  value,
  limit,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/img/bsx.jpg"
        title="Contemplative Reptile"
      />
      <CardActionArea>
        <CardActions className={classes.contents}>
          <Typography variant="h5" color="textSecondary" component="p">
            {title}
          </Typography>
          <Box style={{ marginLeft: 'auto' }}>
            <ArrowForwardIosIcon />
          </Box>
        </CardActions>
      </CardActionArea>

      <CardContent className={classes.contents}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardContent className={classes.contents}>
        <Paper variant="outlined">
          <Box m={1}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box>想定利回り(IRR)</Box>
                <Box>{irr}</Box>
                <Box>(税引前)</Box>
              </Grid>
              <Grid item xs={4}>
                <Box>想定運用期間</Box>
                <Box>{term}</Box>
              </Grid>
              <Grid item xs={4}>
                <Box>投資対象</Box>
                <Box>{target}</Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </CardContent>

      <CardContent className={classes.contents}>
        <Typography variant="body2" color="textSecondary" component="p">
          取引可能Token
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {value.toLocaleString()}円
          /
          {limit.toLocaleString()}円
        </Typography>
        <LinearProgress variant="determinate" value={value/limit*100} />
      </CardContent>
    </Card>
  );
}
export default St;