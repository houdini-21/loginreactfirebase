import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Avatar from "./Avatar";
import "../Css/Signin.scss";


export default class FormularioSignup extends Component {
  render() {
    return (
      <div className="background">
        <div className="signin-card">
          <div className="row">
            <form className="col s12">
              <div className="row center">
                <Avatar />
                <div className="input-field col s12">
                  <input id="username" type="text" className="validate" />
                  <label for="username">Username</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="text" className="validate" />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="btn-div center">
                <a className="waves-effect waves-light btn btn-log">Signup</a>
                <p>
                  Already have an account?<Link to="/Signin"> Signin</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
