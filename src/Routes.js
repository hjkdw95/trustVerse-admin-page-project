import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Jupiter from './pages/Jupiter/Jupiter';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Tams from './pages/Tams/Tams';
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';
import StatusProvider from './components/Providers/StatusProvider';
import SearchValueProvider from './components/Providers/SearchValueProvider';

export default class Routes extends Component {
  render() {
    return (
      <StatusProvider>
        <Router>
          <NavBar />
          <Switch>
            <PrivateRoutes exact path="/" component={Main} />
            <PublicRoutes exact path="/signUp" component={SignUp} />
            <PublicRoutes exact path="/signIn" component={SignIn} />
            <PrivateRoutes exact path="/jupiter" component={Jupiter} />
            <SearchValueProvider>
              <PrivateRoutes exact path="/tams" component={Tams} />
            </SearchValueProvider>
          </Switch>
        </Router>
      </StatusProvider>
    );
  }
}
