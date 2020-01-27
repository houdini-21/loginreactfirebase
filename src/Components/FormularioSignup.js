import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "../Css/Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Eye = ({ filled, onClick }) => {
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon icon={filled ? faEye : faEyeSlash} size="lg" color="Dodgerblue"/>
    </div>
  );
};

export default class FormularioSignup extends Component {
  UserRef = React.createRef();
  EmailRef = React.createRef();
  PassRef = React.createRef();
  state = { filled: false };

  
  signupPost = (e) => {
    e.preventDefault();

    const postSignup = {
      username: this.UserRef.current.value,
      email: this.EmailRef.current.value,
      password: this.PassRef.current.value
    };
    console.log(postSignup);
    this.props.signupPost(postSignup);
  };

  showPass = () => {
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
    this.setState({ filled: !this.state.filled });
  }


  render() {
    return (
      <div className="background">
        <div className="signin-card">
          <div className="row">
            <form  className="col s12" onSubmit={this.signupPost}>
              <div className="row center">
                <Avatar />
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
                <Eye className='eyecolor' filled={this.state.filled} onClick={this.showPass} />
                </div>
              </div>
              <div className="btn-div center">
                <button type="submit" className="waves-effect waves-light btn btn-log">
                  Signup
                </button>
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
