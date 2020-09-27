import React from 'react';
import './App.css';

// Pages
import Landing from './pages/landing'
import Room from './pages/room'
import Error from './pages/error'

// Add routing
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/room/:id" component={Room} />
        <Route path="/error" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
