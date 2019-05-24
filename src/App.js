import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './pages/home'
import NotMatch from './pages/404'
import Register from './pages/register'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
