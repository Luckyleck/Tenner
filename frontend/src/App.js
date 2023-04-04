import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Splash from './components/Splash';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/login">
        <LoginFormPage /> 
      </Route>
      <Route path="/signup"> 
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;
