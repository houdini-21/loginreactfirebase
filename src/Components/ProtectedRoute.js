import React from "react";
import { Route, Redirect } from "react-router-dom";

const key = localStorage.getItem("authToken");


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      key === 'true' ? (
        //si es postivo redirecciona el componente con la etiqueta <protectedRoute>
        <Component {...props} />
      ) : (
        //sino te envia a /
        <Redirect
          to={{
            pathname: "/home",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
