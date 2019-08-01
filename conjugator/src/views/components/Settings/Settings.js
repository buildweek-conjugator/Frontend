import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SettingsSection from "./SettingsSection.js";

function Settings() {
  const initialSettings = {
    // "vosotros" : false,
    // "indicative": false,
    // "subjunctive": false,
    // "imperative": false,
    // "present": false,
    // "conditional": false,
    // "conditional-perfect": false
    // etc...
  };
  const [settingsMap, setSettingsMap] = useState(initialSettings);
  console.table(settingsMap);

  useEffect(() => {
    axios.get("endpointurl/settings").then(res => setSettingsMap(/*data*/));
  }, []);

  const toggleCheckbox = e => {
    // e.preventDefault() // caused issues - why?
    setSettingsMap({ ...settingsMap, [e.target.id]: e.target.checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.table(settingsMap)
    axios
      .put("url", settingsMap)
      .then(/*settings saved!*/)
      .catch(error => console.log("Error:", error));
  };

  const settingsHeaderAndLabels = [
    { header: "Latam Spanish or Spain Spanish",
      labels: ["vosotros"]},
    {
      header: "Grammatical Moods",
      labels: ["indicative", "subjunctive"]
    },
    {
      header:"Tenses",
      labels: [
        "present",
        "conditional",
        "conditional perfect",
        "future",
        "past-perfect",
        "imperfect",
        "future-perfect",
        "preterite",
        "present-perfect"
      ]
    }
  ];

  return (
    <div>
      <Container maxWidth="sm" className="settings-form">
        <form onSubmit={handleSubmit}>
            {settingsHeaderAndLabels.map(settingsSection => (<SettingsSection toggleCheckbox={toggleCheckbox} header={settingsSection.header} labels={settingsSection.labels}/>))}
          {/* <Typography component="h3">Latam Spanish or Spain Spanish</Typography>
          <div className="form-section vosotros">
            <label>
              <input type="checkbox" id="vosotros" onChange={toggleCheckbox} />
              Include "vosotros"
            </label>
          </div>
          <Typography component="h3">Grammatical Moods</Typography>
          <div className="form-section moods">
            <label>
              <input
                type="checkbox"
                id="indicative"
                onChange={toggleCheckbox}
              />
              Indicative
            </label>
            <label>
              <input
                type="checkbox"
                id="subjunctive"
                onChange={toggleCheckbox}
              />
              Subjunctive
            </label>
            <label>
              <input
                type="checkbox"
                id="imperative"
                onChange={toggleCheckbox}
              />
              Imperative
            </label>
          </div>
          <Typography component="h3">Tenses</Typography>
          <div className="form-section tenses">
            <label>
              <input type="checkbox" id="present" onChange={toggleCheckbox} />
              Present
            </label>
            <label>
              <input type="checkbox" id="imperfect" onChange={toggleCheckbox} />
              Imperfect
            </label>
            <label>
              <input
                type="checkbox"
                id="conditional"
                onChange={toggleCheckbox}
              />
              Conditional
            </label>
            <label>
              <input
                type="checkbox"
                id="future-perfect"
                onChange={toggleCheckbox}
              />
              Future Perfect
            </label>
            <label>
              <input
                type="checkbox"
                id="conditional-perfect"
                onChange={toggleCheckbox}
              />
              Conditional Perfect
            </label>
            <label>
              <input type="checkbox" id="preterite" onChange={toggleCheckbox} />
              Preterite
            </label>
            <label>
              <input type="checkbox" id="future" onChange={toggleCheckbox} />
              Future
            </label>
            <label>
              <input
                type="checkbox"
                id="present-perfect"
                onChange={toggleCheckbox}
              />
              Present Perfect
            </label>
            <label>
              <input
                type="checkbox"
                id="past-perfect"
                onChange={toggleCheckbox}
              />
              Past Perfect
            </label>
          </div> */}
          <Button size="medium" type="submit">
            Update Settings
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Settings;
