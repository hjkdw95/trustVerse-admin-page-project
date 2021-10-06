import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Jupiter from './pages/Jupiter/Jupiter';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Tams from './pages/Tams/Tams';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/jupiter" component={Jupiter} />
          <Route exact path="/tams" component={Tams} />
        </Switch>
      </Router>
    );
  }
}
