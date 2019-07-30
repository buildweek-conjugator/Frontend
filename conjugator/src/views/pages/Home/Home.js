import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import './Home.scss';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="app-container-holder">
      <Paper>
    <Typography component="h3">Welcome to the Home Page</Typography>
    <div>
    <p>PLace Holder Text PLace Holder TextPLace Holder TextPLace Holder TextPLace Holder TextPLace Holder TextPLace Holder Text</p>
    </div>

    <div>
                 <NavLink to="/Authentication/">
            {' '}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Play
            </Button>
    </NavLink>
  <NavLink to="/game/">
            {' '}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Game
            </Button>
    </NavLink>



        </div>
      </Paper>
    </div>
  );
}
