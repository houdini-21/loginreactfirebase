import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FormularioSignin from "./FormularioSignin";
import FormularioSignup from "./FormularioSignup";
import Swal from "sweetalert2";
import Home from "./Home";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Css/Config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);

export default class Router extends Component {
  state = {
    Login: false,
    Username: null
  };

  signupPost = postSignup => {
    console.log(postSignup);
    const name = postSignup.username
    const mail = postSignup.email
    const pass = postSignup.password

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

        const User = firebase.auth().currentUser;

        User.updateProfile({
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        this.setState({
          Login: true,
          Username: name
        });
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
      let namee
      if (userr != null) {
        namee = userr.displayName;
      }
     const resul = JSON.parse(localStorage.getItem("User"));
      const na = resul.Username
     console.log(na)
      })
      .catch(error => {
        var errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage
        });
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
