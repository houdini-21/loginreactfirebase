import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormularioSignin from "./FormularioSignin";
import FormularioSignup from "./FormularioSignup";
import Swal from "sweetalert2";
import Home from "./Home";
import Dashboard from "./Dashboard";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Css/Config";
import ProtectedRoute from "./ProtectedRoute";

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: null, redirect: true };
  }

  signupPost = postSignup => {
    console.log(postSignup);
    const name = postSignup.username;
    const mail = postSignup.email;
    const pass = postSignup.password;
 const imagen = axios.get(`https://jsonplaceholder.typicode.com/posts`)
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, pass)

      .then(user => {
        console.log("registrado", user);
        Swal.fire({
          icon: "success",
          title: "Usuario Registrado",
          text: name
        });
        console.log(imagen)

        const User = firebase.auth().currentUser;
        User.updateProfile({
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        });
        this.setState({
          Username: name
        });
//        window.location = "/dashboard";
        localStorage.setItem("authToken", "true");
        localStorage.setItem("User", JSON.stringify(this.state));
      })

      .catch(error => {
        var errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage
        });
      });
  };

  signinPost = postSignin => {
    firebase
      .auth()
      .signInWithEmailAndPassword(postSignin.email, postSignin.pass)

      .then(user => {
        console.log("loggeado", user);
        Swal.fire({
          icon: "success",
          title: "Bienvenido"
        });
        let userr = firebase.auth().currentUser;
        let namee;
        if (userr != null) {
          namee = userr.displayName;

          this.setState({
            Username: namee
          });
          window.location = "/dashboard";
        }
        localStorage.setItem("User", JSON.stringify(this.state));
        localStorage.setItem("authToken", "true");
      })

      .catch(error => {
        var errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage
        });
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
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
