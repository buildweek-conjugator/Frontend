import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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

const data = {
  answer: 'ubicaren',
  performer: 'ellos/ellas/ustedes',
  mood: 'Subjunctive',
  infinitive: 'ubicar',
  performer_en: 'them / you all (formal)',
  tense: 'Future',
  has_long: false,
  translation: 'to place; locate; to be located; be situated',
  value: ''
};

export default function ConjugatorGame() {
  const classes = useStyles();
  const [verb, setVerb] = useState(data);
  const [completed, setCompleted] = useState(5);

  // let verb_xyz = "";

  const handleChange = event => {
    // console.log('Event verb', event.target.value);
    // console.log("event target", event.target.value)
    // let verb_xyz = event.target.value;
    setVerb({ ...verb, [event.target.name]: event.target.value });
  };

  // axios request to get relevant user settings.
  // step1 retrieve random unconjugated verb and tense and from data base
  // step2 user inputs response
  // step3 posts request to check if answer is correct.
  function handleSubmit(event) {
    event.preventDefault();
    // axios.get('somerUrl', verb);
    // console.log("verb_xyz", verb_xyz)
    // console.log(event.target) // should be whole form

    let verb_value = document.getElementById('outlined-name');

    // console.log("verb answer", verb.answer)
    //update progress bar
    if (verb_value.value === verb.answer) {
      setCompleted(completed + 10);
    }
  }
  // step4 if then statement if correct moves to next question,else red box of saddness.

  return (
    <div className="app-containter-holder">
      <Paper>
        <Typography component="h2">Verb: </Typography>
        <p>{verb.infinitive}</p>
        <Typography component="h2">Tense: </Typography>
        <p>{verb.tense}</p>

        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-name"
            label="Verb"
            name="value"
            onChange={handleChange}
            placeholder="Enter your conjugation"
            value={verb.value}
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
        <ProgressBar completed={completed} />
      </Paper>
    </div>
  );
}
