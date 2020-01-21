import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormularioSignin from "./FormularioSignin";
import FormularioSignup from "./FormularioSignup";
import Home from "./Home";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Css/Config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);

export default class Router extends Component {
  signupPost = postSignup => {
    console.log(postSignup);
    firebase
      .auth()
      .createUserWithEmailAndPassword(postSignup.email, postSignup.password)

      .then(user => {
        console.log("registrado", user);
      })
      .catch(error => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  signinPost = postSignin => {
    firebase
      .auth()
      .signInWithEmailAndPassword(postSignin.email, postSignin.pass)
      .then(user => {
        console.log("loggeado", user);
      })
      .catch(error => {
        var errorMessage = error.message;
        alert(errorMessage);
      });

    console.log(postSignin.email);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signin"
            render={() => {
              return <FormularioSignin signinPost={this.signinPost} />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return <FormularioSignup signupPost={this.signupPost} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
