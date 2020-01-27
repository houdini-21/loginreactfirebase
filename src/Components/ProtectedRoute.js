import React from "react";
import { Route, Redirect } from "react-router-dom";

const key = localStorage.getItem("authToken");

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      key ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
