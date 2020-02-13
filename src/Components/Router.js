import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormularioSignin from "./FormularioSignin";
import FormularioSignup from "./FormularioSignup";
import Home from "./Home";
import Dashboard from "./Dashboard";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Css/Config";
import ProtectedRoute from "./ProtectedRoute";
import notFound from "./404.js";
import Loading from "./Loading";

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { render: true };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ render: false });
      }.bind(this),
      2000
    );
  }

  render() {
    if (this.state.render) {
      return <Loading />;
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={FormularioSignin} />
          <Route exact path="/signup" component={FormularioSignup} />
          <Route component={notFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
