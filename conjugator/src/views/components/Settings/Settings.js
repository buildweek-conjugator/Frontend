import React, { useState } from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


function Settings() {

    const [settings, setSettings] = useState({})
  return (
    <div>
        <h2>Settings</h2>
        <Container maxWidth="sm" style={{ backgroundColor: 'white', height: '50vh', boxShadow: "-1px 4px 4px 1px rgba(219,219,219,1)"}}>
            <form class="settings-form">
                <Typography component="h3">
                    Latam Spanish or Spain Spanish
                </Typography>
                <div className="vosotros">
                    <label> 
                        <input
                            type='checkbox'
                            id='vosotros'/>
                        Include vosotros
                    </label>
                </div>
                <div className="moods">
                    <Typography component="h3">
                        Grammatical Moods
                    </Typography>
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
                <div className='tenses'>
                    <Typography component="h3">
                        Tenses
                    </Typography>
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
