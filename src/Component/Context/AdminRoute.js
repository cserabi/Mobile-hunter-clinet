import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import useAuth from '../Hook/useAuth';



const AdminRoute = ({ children, ...rest }) => {
  const { user,admin } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => admin?.email ? children : <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />

      }
    >

    </Route>
  );
};

export default AdminRoute;
