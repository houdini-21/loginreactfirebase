import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Eye from "./Icon";
import "../Css/Signin.css";

export default class Signin extends Component {
  state = { filled: false };
  render() {
    return (
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
                  <input type="checkbox" onChange={this.handleCheckboxChange} />
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
    );
  }
}
