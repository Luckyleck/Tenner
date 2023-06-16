import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import SessionUserDisplay from './components/SessionUserDisplay';
import GigShow from './components/GigShow';
import './reset.css'
import NewNav from './components/NewNav';
import NewGigDisplay from './components/NewGigDisplay/NewGigDisplay';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/profile" component={SessionUserDisplay} />
        <Route exact path="/users/:userId" component={ViewUser} />
        {/* <Route path="/gigs/:gigId" component={GigShow} /> */}
        <Route path="/gigs/:gigId">
          <GigShow />
          {/* <hr /> */}
          {/* <NewGigDisplay /> */}
        </Route> 
      </Switch>
    </>
  );
}

export default App;
