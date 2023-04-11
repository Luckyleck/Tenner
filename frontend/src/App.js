import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import UserDisplay from './components/UserDisplay';
import './reset.css'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route exact path="/profile">
        <UserDisplay />
      </Route>
      <Route path="/gigs/:gigId">
        {/* gig show */}
      </Route>
    </Switch>
  );
}

export default App;
