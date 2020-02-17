import React, { Component } from "react";
import "../Css/Avatar.css";
let pic = "https://avatars.dicebear.com/v2/bottts/example.svg";
let name = "User";

export default class Avatar extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    if (resul !== null) {
      name = " back, " + resul.Username + ", what's up?";
      pic = resul.Avatar;
    }
    return (
      <div>
        <div className="profile">
          <img className="avatar-div" src={pic} alt="profile" />
        </div>
        <div className="username-div">
          <h5>Welcome {name}</h5>
        </div>
      </div>
    );
  }
}
