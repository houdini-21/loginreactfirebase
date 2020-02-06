import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Eye from "./Icon";
import "../Css/Signin.css";

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
    console.log(postSignin);

    this.props.signinPost(postSignin);
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
                <button
                  type="submit"
                  className="waves-effect waves-light btn btn-log"
                >
                  Signin
                </button>
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
