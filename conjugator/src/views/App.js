import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { styled } from '@material-ui/styles';
import MenuAppBar from './components/MenuAppBar/MenuAppBar'
import Settings from './components/Settings/Settings.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <MenuAppBar />
      <div className="app-container-holder">
        <Paper className="app-container">
          <Typography variant="h2" component="h2">
            Welcome to Conjugator!
          </Typography>
          <Typography component="h3">
            CTA HERE!
          </Typography>

          <Switch>
            <Route path='/settings' component={Settings} />
            {/* <Route component={WelcomePage} /> */}
          </Switch>
        </Paper>
      </div>
    </div>
  );
}

export default App;
