import React from "react";
import { Route, Redirect } from "react-router-dom";

const key = localStorage.getItem("authToken");
const HabilitarRuta = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      key === 'false' ? (
        //si es postivo redirecciona el componente con la etiqueta <protectedRoute>
        <Component {...props} />
      ) : (
        <Redirect
        to={{
          pathname: "/dashboard",
          state: { from: props.location }
        }}
      />
 
        //sino te envia a /

      )
    }
  />
);
export default HabilitarRuta;

