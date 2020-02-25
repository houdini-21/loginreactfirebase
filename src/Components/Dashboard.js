 
import React, { Component } from "react";
import * as firebase from "firebase/app";
import NavBar from "./NavBar";

export default class Dashboard extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    const name = resul.Username;
    function logout() {
      localStorage.setItem("authToken", "false");
      firebase.auth().signOut();
      window.location = "/";
    }
    return (
      <div>
        <NavBar />
        <h1>welcome {name}</h1>
        <button onClick={logout}>Logout </button>
      </div>
    );
  }
}