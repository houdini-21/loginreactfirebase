import React, { Component, lazy, Suspense } from "react";
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
import notFound from "./404.js";
import Loading from "./Loading";


const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: null, redirect: true, render: true };
  }

  componentDidMount() {
    setTimeout(function() { 
        this.setState({render: false}) 
    }.bind(this), 2000)
  }

  signupPost = postSignup => {
    console.log(postSignup);
    const name = postSignup.username;
    const mail = postSignup.email;
    const pass = postSignup.password;

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
        const userpic = `https://avatars.dicebear.com/v2/bottts/${name}.svg`;

        const User = firebase.auth().currentUser;
        User.updateProfile({
          displayName: name,
          photoURL: userpic
        });
        this.setState({
          Username: name,
          Avatar: userpic
        });
        window.location = "/dashboard";
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
        let picuser;
        if (userr != null) {
          namee = userr.displayName;
          picuser = userr.photoURL;

          this.setState({
            Username: namee,
            Avatar: picuser
          });
          window.location = "/dashboard";
        }

        console.log(picuser);
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

  render() {
    if (this.state.render) {
      return <Loading />;
    }
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

          <Route component={notFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
