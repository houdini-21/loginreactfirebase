import React, { Component } from "react";
import * as firebase from "firebase/app";

export default class Dashboard extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    const name = resul.Username;
    const pic = resul.Avatar;
    console.log(pic);
    function logout() {
      localStorage.setItem("authToken", "false");
      firebase.auth().signOut();
      window.location = "/";
    }
    return (
      <div>
        <h1>welcome {name}</h1>
        <button onClick={logout}>Logout </button>
        <img src={pic} alt="profile" />
      </div>
    );
  }
}
