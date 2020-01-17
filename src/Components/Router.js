import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormularioSignin from "./FormularioSignin";
import FormularioSignup from "./FormularioSignup";
import Home from "./Home";

export default class componentName extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={FormularioSignin} />
          <Route exact path="/signup" component={FormularioSignup} />
        </Switch>
      </BrowserRouter>
    );
  }
}
