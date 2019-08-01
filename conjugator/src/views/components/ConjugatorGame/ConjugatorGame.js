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

import Loader from 'react-loader-spinner';

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
}

const dataArr = [{
  answer: "ubicaren",
  performer: "ellos/ellas/ustedes",
  mood: "Subjunctive",
  infinitive: "ubicar",
  performer_en: "them / you all (formal)",
  tense: "Future",
  has_long: false,
  translation: "to place; locate; to be located; be situated",
  value: ""
},
{
  answer: "llamo",
  performer: "yo",
  mood: "Subjunctive",
  infinitive: "llamar",
  performer_en: "them / you all (formal)",
  tense: "Present",
  has_long: false,
  translation: "to call",
  value: ""
},
{
  answer: "tañed",
  performer: "ella",
  mood: "Imperative Affirmative",
  infinitive: "tañer",
  performer_en: "them / you all",
  tense: "Present",
  has_long: false,
  translation: "to play",
  value: ""
}];

// step1: axios.get - get relevant user settings for which verb forms to show
// step2: axios.get - retrieve random unconjugated verb and tense and from data base
// step3: user inputs conjugated verb
// step4: axios.post - posts request to check if answer is correct

export default function ConjugatorGame() {


  const [verb, setVerb] = useState({});
  const [input, setInput] = useState('');

  const [completed, setCompleted] = useState(0);
  // const [verb, setVerb] = useState(dataArr[completed]);
  const [answer, setAnswer] = useState(null);

  //random array of numbers to test
  const [usedWords, setUsedWords] = useState([1, 2, 5, 7, 9]);


  function axiosGet () {

    axios.get(`https://conjugator-bw-api.herokuapp.com/api/verbs/${getRandomInt(638)}`)
      .then(response => {
        console.table("Question Data", response.data)

        setVerb(response.data)
        setInput('')
        setAnswer(null)
      })
  }

  useEffect( () => {
    axiosGet()
 }, [] )




  function getRandomInt(max) {
<<<<<<< HEAD

    return Math.floor(Math.random() * Math.floor(max));
    // let randoInt = Math.floor(Math.random() * Math.floor(max));
=======
    return Math.floor(Math.random() * Math.floor(max))
>>>>>>> e2e0da9e319e50b757af716e49578859b5fa5c3a
    // console.log(
    //   randoInt,
    //   " appears ",
    //   usedWords.indexOf(randoInt),
    //   " in the array"
    // );
    // //code to see if number has already been used this session
    // //if it is not in the array (-1) its a good int
    // //otherwise its a bad int and we need to get a new number
    // if (usedWords.indexOf(randoInt) === -1) {
    //   console.log("good int");
    //   return randoInt;
    // } else {
    //   console.log("bad int");
<<<<<<< HEAD
    //   return getRandomInt(max);
=======
      // return getRandomInt(max);
>>>>>>> e2e0da9e319e50b757af716e49578859b5fa5c3a
    // }
  }

  const handleChange = event => {
    let textField = document.getElementById("outlined-name");
    textField.style = "background:white;";
    setInput(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log("event.target.value", event.target.value)
    const targetInput = event.target.value;


    if (input.toLowerCase() === verb.answer) {
      setCompleted(completed + 1);
      targetInput.style = "background:#D9EFDE;";

      // placeholder to demo app until api is connected

      // setVerb(dataArr[completed+1])
      axiosGet()
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
    setInput(input + `${chipClicked.label}`)

  };

  const skipVerb = () => {
    // api call for new word
    // setVerb(dataArr[completed+1])
    axiosGet()
  };

  const toggleAnswer = () => {
    console.log(answer)
    if (answer === null) {
      setAnswer(verb.answer);
    } else {
      setAnswer(null);
    }
  };

  const [buttonText, setButtonText] = useState(false)
  const hoverOn = () => {
    setButtonText(true)
  };

  const hoverOff = () => {
    setButtonText(false)
  };

  return (
    <Paper className="game-container">
  <>
  {verb.infinitive === undefined ? (
      <div className="key spinner">
        <Loader
            type="Puff"
            color="#204963"
            height="60"
            width="60"
        />
        <p>Loading Data</p>
      </div>
    ) : (


      <form
        className="form-container"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <div className="tense-mood-container">
          <span>{verb.tense_english} tense</span>
          <span>{verb.mood_english} mood</span>
        </div>
        <div className="verb-translation-container">
    <span className="verb">{!verb.infinitive ? verb.infinitive : verb.infinitive.toUpperCase()}</span>
          <span className="translation">to {verb.short_english_verb}</span>
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
          <span id="subject">{verb.pronoun_spanish}</span>

          <TextField
            id="outlined-name"
            name="value"
            onChange={handleChange}
            placeholder={answer ? `${verb.answer}` : `Enter your conjugation`}
            value={input}
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
            <Button onClick={skipVerb} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{buttonText ? " Pase " : "Skip"}</Button>
            <Button onClick={toggleAnswer}>
              {answer ? `Hide Answer` : `Show Answer`}
            </Button>
          </ButtonGroup>
        </Grid>
        {/* {answer && <p>{data.answer}</p>} */}
        <ProgressBar className="progress-bar" completed={completed} />
      </form>

    )}
    </>
    </Paper>
  );
}
