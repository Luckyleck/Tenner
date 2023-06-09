import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import UserDisplay from './components/UserDisplay';
import GigShow from './components/GigShow';
import './reset.css'
import NewNav from './components/NewNav';
import NewGigDisplay from './components/NewGigDisplay/NewGigDisplay';

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/profile" component={UserDisplay} />
        <Route path="/gigs/:gigId" component={GigShow} />
        <hr/>
        <Route path="/gigs/:gigId" component={NewGigDisplay} />
      </Switch>
    </>
  );
}

export default App;
