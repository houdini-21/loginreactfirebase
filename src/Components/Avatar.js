import React, { Component } from "react";
import "../Css/Signup.css";

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <img
            className="avatar-div"
            src="https://avatars.dicebear.com/v2/bottts/example.svg"
          alt="profile"/>
        </div>
        <div className="username-div">
          <h5>Welcome back, buddy, what's up?</h5>
        </div>
      </div>
    );
  }
}
