import React, { useState } from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
    }
    const [settingsMap, setSettingsMap] = useState(initialSettings)
    console.table(settingsMap)

    const toggleCheckbox = (e) => {
        // e.preventDefault() // caused issues - why?
        setSettingsMap({...settingsMap, [e.target.id] : e.target.checked})
        // if settings value not in object, set to false automatically?
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.table(settingsMap)
    }

  return (
    <div>
        <Container maxWidth="sm" className="settings-form">
            <form onSubmit={handleSubmit}>
                <Typography component="h3">
                    Latam Spanish or Spain Spanish
                </Typography>
                <div className="form-section vosotros">
                    <label> 
                        <input
                            type='checkbox'
                            id='vosotros'
                            // onChange={event => {
                            //     console.log("event target: ", event.target) // "vosotros"
                            //     console.log("event target type: ", event.target.type) // "how to even know about "type???
                            //     console.log("event target type: ", event.target.checked)
                            //     setSettingsMap(event.target.value)
                            // }}/>
                            onChange={toggleCheckbox}
                        />
                        Include "vosotros"
                    </label>
                </div>
                <Typography component="h3">
                    Grammatical Moods
                </Typography>
                <div className="form-section moods">
                    <label> 
                        <input
                            type='checkbox'
                            id='indicative'
                            onChange={toggleCheckbox}
                            />
                        Indicative
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='subjunctive'
                            onChange={toggleCheckbox}
                            />
                        Subjunctive
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='imperative'
                            onChange={toggleCheckbox}
                            />
                        Imperative
                    </label>
                </div>
                <Typography component="h3">
                    Tenses
                </Typography>
                <div className='form-section tenses'>
                    <label> 
                        <input
                            type='checkbox'
                            id='present'
                            onChange={toggleCheckbox}
                            />
                        Present
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='imperfect'
                            onChange={toggleCheckbox}
                            />
                        Imperfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='conditional'
                            onChange={toggleCheckbox}
                            />
                        Conditional
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='future-perfect'
                            onChange={toggleCheckbox}
                            />
                        Future Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='conditional-perfect'
                            onChange={toggleCheckbox}
                            />
                        Conditional Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='preterite'
                            onChange={toggleCheckbox}
                            />
                        Preterite
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='future'
                            onChange={toggleCheckbox}
                            />
                        Future
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='present-perfect'
                            onChange={toggleCheckbox}
                            />
                        Present Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='past-perfect'
                            onChange={toggleCheckbox}
                            />
                        Past Perfect
                    </label>
                </div>
                <Button size="medium" type="submit">Update Settings</Button>
            </form>
        </Container>
    </div>
  )
}

export default Settings;
