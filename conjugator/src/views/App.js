import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { styled } from '@material-ui/styles';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Settings from './components/Settings/Settings.js';
import './App.scss';

import Authentication from './pages/Authentication/Authentication';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ConjugatorGame from './components/ConjugatorGame/ConjugatorGame';
import IconBreadcrumbs from './components/FooterNav/FooterNav';
function App(props) {
  return (
    <div className="App">
      <MenuAppBar props={props}/>
      <div className="app-container-holder">
        <Paper className="app-container">
          <Typography className="app-h2" variant="h2" component="h2">
            Conjugator
          </Typography>
          {/* <Typography component="h3">CTA HERE!</Typography> */}

          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/game/" component={ConjugatorGame} />
            <Route path="/dashboard/" component={UserDashboard} />
            <Route path="/" component={Authentication} />
          </Switch>
    </Paper>

    </div>
<IconBreadcrumbs/>
    </div>
  );
}

export default App;
