import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthStore } from '../store/auth/authStore';

const RouteGuard = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

export default RouteGuard;
