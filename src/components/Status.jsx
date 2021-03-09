import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  content:{
    flexGrow: 1
  },
  title: {
    fontSize: 14,
  },
});

const Status = ({ loading, children }) => {
const classes = useStyles();
  
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          {
            loading &&
            <Grid container
              direction='row'
              alignItems='center'
              justify='center'
            >
              <CircularProgress/>
            </Grid>
          }
          <Grid container
            direction='row'
            alignItems='center'
            justify='center'
          >
            {children}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

Status.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool
}

Status.defaultProps = {
  children: null,
  loading: false
};

export default Status;