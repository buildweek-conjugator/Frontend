import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

export default function ProgressBar(props) {

  // console.log("props", typeof props.completed)
  // console.log("props", props)

  const classes = useStyles();

      return (
    <div className={classes.root}>
      {/* <LinearProgress variant="determinate" value={props.completed} /> */}
      <br />
      <LinearProgress className="progress-bar" color="default" variant="determinate" value={props.completed} />
    </div>
  );
}
