import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Route} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Authentication from '../Authentication/Authentication';
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
       <Route path="/Authentication/" exact component={Authentication} />
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
        </div>
      </Paper>
    </div>
  );
}
