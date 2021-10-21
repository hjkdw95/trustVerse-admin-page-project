import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    //Show the component only when the user is Logged in
    // Otherwise, redirect the user to /Signin page
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoutes;
