import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ProgressButton from "react-progress-button";
import AvatarSignup from "./AvatarSIgnup";
import Eye from "./Icon";
import "../Css/Signin.css";
import * as firebase from "firebase/app";
import "firebase/auth";

export default class FormularioSignup extends Component {
  state = { filled: false };
  UserRef = React.createRef();
  EmailRef = React.createRef();
  PassRef = React.createRef();

  signupPost = e => {
    e.preventDefault();

    const postSignup = {
      username: this.UserRef.current.value,
      email: this.EmailRef.current.value,
      password: this.PassRef.current.value
    };
    const name = postSignup.username;
    const mail = postSignup.email;
    const pass = postSignup.password;

    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, pass)

      .then(user => {
        console.log("registrado", user);

        const userpic = `https://avatars.dicebear.com/v2/bottts/${name}.svg`;

        const User = firebase.auth().currentUser;
        User.updateProfile({
          displayName: name,
          photoURL: userpic
        });
        this.setState({
          Username: name,
          Avatar: userpic,
          buttonState: "success"
        });
        window.location = "/";
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
        this.setState({
          buttonState: "error"
        });
      });
  };

  handleClick = () => {
    this.setState({ buttonState: "loading" });
  };

  showPass = () => {
    var tipo = document.getElementById("password");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
    this.setState({ filled: !this.state.filled });
  };

  render() {
    return (
      <div className="background">
        <div className="signin-card">
          <div className="row">
            <form className="col s12" onSubmit={this.signupPost}>
              <div className="row center">
                <AvatarSignup />
                <div className="input-field col s12">
                  <input
                    ref={this.UserRef}
                    type="text"
                    id="username"
                    className="validate"
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s12">
                  <input
                    ref={this.EmailRef}
                    type="text"
                    id="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s10">
                  <input
                    ref={this.PassRef}
                    type="password"
                    id="password"
                    className="validate"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="eye col s2">
                  <Eye
                    className="eyecolor"
                    filled={this.state.filled}
                    onClick={this.showPass}
                  />
                </div>
              </div>
              <div className="btn-div center">
                <ProgressButton
                  onClick={this.handleClick}
                  state={this.state.buttonState}
                >
                  Signup
                </ProgressButton>
              </div>
              <div className="center">
                <p>
                  Already have an account?<Link to="/signin"> Signin</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
