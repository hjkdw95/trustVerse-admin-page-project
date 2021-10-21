import React from 'react';
import { Route, Redirect } from 'react-router';
import isLogin from '../utils/isLogin';

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    //restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoutes;
