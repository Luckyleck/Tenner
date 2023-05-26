import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import UserDisplay from './components/UserDisplay';
import GigShow from './components/GigShow';
import './reset.css'
import NewNav from './components/NewNav';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
    <NewNav sessionUser={sessionUser}/>
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/profile" component={UserDisplay}/>
      <Route path="/gigs/:gigId" component={GigShow}/>
    </Switch>
    </>
  );
}

export default App;
