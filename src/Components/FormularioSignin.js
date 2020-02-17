import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Swal from "sweetalert2";
import ProgressButton from "react-progress-button";
import * as firebase from "firebase/app";
import "firebase/auth";
import Eye from "./Icon";
import "../Css/Login.scss";

export default class FormularioSignin extends Component {
  state = { filled: false };
  EmailRef = React.createRef();
  PassRef = React.createRef();

  signinPost = e => {
    e.preventDefault();

    const postSignin = {
      email: this.EmailRef.current.value,
      pass: this.PassRef.current.value
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(postSignin.email, postSignin.pass)

      .then(user => {
        console.log("loggeado", user);
        let userr = firebase.auth().currentUser;
        let namee;
        let picuser;
        if (userr != null) {
          namee = userr.displayName;
          picuser = userr.photoURL;

          this.setState({
            Username: namee,
            Avatar: picuser,
            buttonState: "success"
          });
          setTimeout(
            function() {
              window.location = "/";
            }.bind(this),
            500
          );
        }

        localStorage.setItem("authToken", "true");
        localStorage.setItem("User", JSON.stringify(this.state));
      })

      .catch(error => {
        var errorMessage = error.message;
        this.setState({
          buttonState: "error"
        });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage
        });
      });
  };

  handleClick = () => {
    this.setState({ buttonState: "loading" });
  };

  showPass = () => {
    let tipo = document.getElementById("password");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
    this.setState({ filled: !this.state.filled });
  };

  render() {
    return (
      <div>
        <div className="background">
          <div className="signin-card">
            <div className="row">
              <form className="col s12" onSubmit={this.signinPost}>
                <div className="row center">
                  <Avatar />
                  <div className="input-field col s12">
                    <input
                      type="text"
                      ref={this.EmailRef}
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
                  <label>
                    <input type="checkbox" />
                    <span>Mantener sesion iniciada</span>
                  </label>
                </div>
                <div className="btn-div center">
                  <ProgressButton
                    onClick={this.handleClick}
                    state={this.state.buttonState}
                  >
                    Signin
                  </ProgressButton>
                </div>
                <div className="center">
                  <p>
                    No account?<Link to="/signup"> Create One!!</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
