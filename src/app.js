import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import './app.module.scss'
import Home from './pages/home'
import NotMatch from './pages/404'
import Register from './pages/register'
import Login from './pages/login'
import Logout from './pages/logout'
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotMatch} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
