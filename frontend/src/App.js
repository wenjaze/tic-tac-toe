import React from 'react';

// Pages
import Landing from './pages/landing'
import Room from './pages/room'
import Error from './pages/error'

// Add routing
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/room/:id" exact component={Room} />
        <Route path="/error" exact component={Error} />
        <Route path="/*" render={() => (<Redirect to="/" />)} />
      </Switch>
    </Router>
  );
}

export default App;
