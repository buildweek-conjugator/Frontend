import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { styled } from '@material-ui/styles';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import './App.scss';

import Home from './pages/Home/Home';
import Authentication from './pages/Authentication/Authentication';

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
            <Home />
          </Typography>

          {/* Routes Go Here */}

            <Switch>
              <Route path="/" exact component={Home} />

            </Switch>

        </Paper>
      </div>
    </div>
  );
}

export default App;
