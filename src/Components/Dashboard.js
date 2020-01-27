import React, { Component } from "react";
import * as firebase from "firebase/app";

export default class Dashboard extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    const name = resul.Username

    
    function logout() {
      localStorage.clear();
      firebase.auth().signOut();
      window.location = "/dashboard"
    }
    return (
      <div>
        <h1>welcome {name}</h1>
    <button onClick={logout}>Logout </button>
      </div>
    );
  }
}
