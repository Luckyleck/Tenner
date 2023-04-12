import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import UserDisplay from './components/UserDisplay';
import GigShow from './components/GigShow';
import './reset.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/profile" component={UserDisplay}/>
      <Route path="/gigs/:gigId" component={GigShow}/>
    </Switch>
  );
}

export default App;