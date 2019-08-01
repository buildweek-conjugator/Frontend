import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";

import ProgressBar from "../ProgressBar/ProgressBar";

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

// step1: axios.get - get relevant user settings for which verb forms to show
// step2: axios.get - retrieve random unconjugated verb and tense and from data base
// step3: user inputs conjugated verb
// step4: axios.post - posts request to check if answer is correct

export default function ConjugatorGame() {
  const [verb, setVerb] = useState(data);
  const [completed, setCompleted] = useState(0);
  const [answer, setAnswer] = useState(null);

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

  const handleSubmit = event => {
    event.preventDefault();
    // console.log("event.target.value", event.target.value)
    const targetInput = event.target.value;

    if (verb.value.toLowerCase() === verb.answer) {
      setCompleted(completed + 10);
      targetInput.style = "background:#D9EFDE;";

      // setTimeout(function(){randomAxios()}, 2000)
    } else {
      targetInput.style = "background:#F8D7DA;";

      setTimeout(() => {
        targetInput.style = "background:white;";
      }, 2000);
    }
  };

  const [chipData, setChipData] = useState([
    { key: 0, label: "á" },
    { key: 1, label: "é" },
    { key: 2, label: "í" },
    { key: 3, label: "ñ" },
    { key: 4, label: "ó" },
    { key: 5, label: "ú" }
  ]);

  const handleClick = chipClicked => () => {
    setVerb({ ...verb, value: verb.value + `${chipClicked.label}` });
  };

  const skipVerb = () => {
    // api call for new word
  };

  const toggleAnswer = () => {
    if (answer === null) {
      setAnswer(data.answer);
    } else {
      setAnswer(null);
    }
  };

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

        <div className="accent-characters">
          {chipData.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                onClick={handleClick(data)}
              />
            );
          })}
        </div>

        <div className="subject-input-container">
          <span id="subject">{verb.performer}</span>

          <TextField
            id="outlined-name"
            name="value"
            onChange={handleChange}
            placeholder={answer ? `${data.answer}` : `Enter your conjugation`}
            value={verb.value}
            margin="normal"
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Submit
          </Button>
        </div>

        <Grid item>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="small contained button group"
          >
            <Button onClick={skipVerb}>Skip</Button>
            <Button onClick={toggleAnswer}>
              {answer ? `Hide Answer` : `Show Answer`}
            </Button>
          </ButtonGroup>
        </Grid>
        {/* {answer && <p>{data.answer}</p>} */}
        <ProgressBar className="progress-bar" completed={completed} />
      </form>
    </Paper>
  );
}
