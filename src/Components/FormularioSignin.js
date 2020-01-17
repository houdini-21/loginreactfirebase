import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Avatar from "./Avatar";
import "../Css/Signin.scss";


export default class FormularioSignin extends Component {
  render() {
    return (
      <div className="background">
        <div className="signin-card">
          <div className="row">
            <form className="col s12">
              <div className="row center">
                <Avatar />
                <div className="input-field col s12">
                  <input id="email" type="text" className="validate" />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
                <label>
                  <input type="checkbox" />
                  <span>Mantener sesion iniciada</span>
                </label>
              </div>
              <div className="btn-div center">
                <a className="waves-effect waves-light btn btn-log">Signin</a>
                <p>
                  No account?<Link to="/Signup"> Create One!!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
