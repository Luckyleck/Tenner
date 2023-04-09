import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Splash from './components/Splash';
import Profile from './components/Profile';
import './reset.css'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
