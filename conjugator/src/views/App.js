import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { styled } from '@material-ui/styles';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Settings from './components/Settings/Settings.js';
import './App.scss';

import Home from './pages/Home/Home';
import Authentication from './pages/Authentication/Authentication';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ConjugatorGame from './components/ConjugatorGame/ConjugatorGame';
function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <div className="app-container-holder">
        <Paper className="app-container">
          <Typography variant="h2" component="h2">
            Conjugator
          </Typography>
     

          <Switch>
            <Route path="/settings" component={Settings} />
            {/* <Route path="/" component={Authentication} /> */}
            <Route path="/game/" component={ConjugatorGame} />
            <Route path="/dashboard/" component={UserDashboard} />
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/" exact component={Authentication} />
          </Switch>
        </Paper>
      </div>
    </div>
  );
}

export default App;
