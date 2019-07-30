import React, { useState } from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Settings() {

    const [settings, setSettings] = useState({
        "vosotros" : "on",

    })
    console.log(settings)

    // const toggleCheckbox = (e) => {
    //     e.preventDefault() // unsure if needed

    // }

  return (
    <div>
        <h2>Settings</h2>
        <Container maxWidth="sm" className="settings-form">
            <form>
                <Typography component="h3">
                    Latam Spanish or Spain Spanish
                </Typography>
                <div className="form-section vosotros">
                    <label> 
                        <input
                            type='checkbox'
                            id='vosotros'
                            onChange={event => {
                                console.log("event target", event.target.value) // "vosotros"
                                setSettings(event.target.value)
                            }
                            }/>
                        Include vosotros
                    </label>
                </div>
                <Typography component="h3">
                    Grammatical Moods
                </Typography>
                <div className="form-section moods">
                    <label> 
                        <input
                            type='checkbox'
                            id='indicative'/>
                        Indicative
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='subjunctive'/>
                        Subjunctive
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='imperative'/>
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
                            id='present'/>
                        Present
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='imperfect'/>
                        Imperfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='conditional'/>
                        Conditional
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='future-perfect'/>
                        Future Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='conditional-perfect'/>
                        Conditional Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='preterite'/>
                        Preterite
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='future'/>
                        Future
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='present-perfect'/>
                        Present Perfect
                    </label>
                    <label> 
                        <input
                            type='checkbox'
                            id='past-perfect'/>
                        Past Perfect
                    </label>
                </div>
                <Button size="medium">Update Settings</Button>
            </form>
        </Container>
    </div>
  )
}

export default Settings;
