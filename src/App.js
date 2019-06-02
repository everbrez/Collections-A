import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './app.module.scss'
import Home from './pages/home'
import NotMatch from './pages/404'
import Register from './pages/register'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
