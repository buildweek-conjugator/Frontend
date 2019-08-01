import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './Home.scss';
import architecture from'./architecture-building-city-1703311.jpg';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  typography: {
    width: '20%'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="app-container-holder">
      <Paper className="homepage-container">
        <h3>Are you ready to play!</h3>
    <div>
    <img src= {architecture} alt="Oops"/>
          <p>
            Click the link below to begin you jounery to become more proficient
            in Spanish
          </p>
        </div>

        <div>
          <NavLink to="/Authentication/">
            {' '}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Register
            </Button>
          </NavLink>
        </div>
      </Paper>
    </div>
  );
}
