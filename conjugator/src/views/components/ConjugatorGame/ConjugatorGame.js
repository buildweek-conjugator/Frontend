import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Alert } from 'reactstrap';

import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ProgressBar from "../ProgressBar/ProgressBar";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
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
  answer: "ubicaren",
  performer: "ellos/ellas/ustedes",
  mood: "Subjunctive",
  infinitive: "ubicar",
  performer_en: "them / you all (formal)",
  tense: "Future",
  has_long: false,
  translation: "to place; locate; to be located; be situated",
  value: ""
};

// axios request to get relevant user settings.
// step1 retrieve random unconjugated verb and tense and from data base
// step2 user inputs response
// step3 posts request to check if answer is correct.

export default function ConjugatorGame() {
  const [verb, setVerb] = useState(data);
  const [completed, setCompleted] = useState(5);

  //random array of numbers to test
  const [usedWords, setUsedWords] = useState([1, 2, 5, 7, 9]);
  function getRandomInt(max) {
    let randoInt = Math.floor(Math.random() * Math.floor(max));
    console.log(
      randoInt,
      " appears ",
      usedWords.indexOf(randoInt),
      " in the array"
    );
    //code to see if number has already been used this session
    //if it is not in the array (-1) its a good int
    //otherwise its a bad int and we need to get a new number
    if (usedWords.indexOf(randoInt) === -1) {
      console.log("good int");
      return randoInt;
    } else {
      console.log("bad int");
      return getRandomInt(max);
    }
  }

  const handleChange = event => {
    let textField = document.getElementById("outlined-name");
    textField.style = "background:white;";

    setVerb({ ...verb, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("event.target.value", event.target.value)
    const targetInput = event.target.value;

    if (verb.value === verb.answer) {
      setCompleted(completed + 10);
      targetInput.style = "background:#D9EFDE;";

      // setTimeout(function(){randomAxios()}, 2000)
    } else {
      targetInput.style = "background:#F8D7DA;";
    }
  }
  // step4 if then statement if correct moves to next question,else red box of saddness.

  return (
    <Paper className="game-container">
      <form
        className="form-container"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="tense-mood-container">
          <span>{verb.tense} tense</span>
          <span>{verb.mood} mood</span>
        </div>
        <div className="verb-translation-container">
          <span className="verb">{verb.infinitive.toUpperCase()}</span>
          <span className="translation">{verb.translation}</span>
        </div>

        <div className="subject-input-container">
          <span id="subject">{verb.performer}</span>

          <TextField
            id="outlined-name"
            name="value"
            onChange={handleChange}
            placeholder="enter conjugated verb"
            value={verb.value}
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit-button"
        >
          Submit Answer
        </Button>
        <ProgressBar className="progress-bar" completed={completed} />
      </form>
    </Paper>
  );
}
