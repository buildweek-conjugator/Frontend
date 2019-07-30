import React from 'react';
import { useState } from 'react';
import axios from 'axios'

import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ProgressBar from '../ProgressBar/ProgressBar';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));
export default function ConjugatorGame() {
  const classes = useStyles();

  const [verb, setVerb] = useState('');
  const [answer, setAnswer] = useState('');
  const [completed, setCompleted] = useState(5);
  const handleChange = event => {
    // const updatedVerb = {verb, [event.target.name]: event.target.value};
    console.log('Event verb', event.target.value);
    setVerb(event.target.value);
    // setVerb = verb
  };

  // axios request to get relevant user settings.
  // step1 retrieve random unconjugated verb and tense and from data base
  // step2 user inputs response
  // step3 posts request to check if answer is correct.
  function handleSubmit(event) {
    event.preventDefault();
    axios.get('somerUrl', verb).then(respone => setAnswer(respone.data.answer));

    if (verb === answer) { // updating progress bar.
   setCompleted(completed+1)
  }

  }
  // step4 if then statement if correct moves to next question,else red box of saddness.

  return (
    <div className="app-containter-holder">
      <Paper>
        <Typography component="h3">Game</Typography>

        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-name"
            label="Verb"
            name="verb"
            onChange={handleChange}
            value={verb}
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Answer.
          </Button>
    </form>
    <ProgressBar progress = {completed}/>
      </Paper>
    </div>
  );
}
