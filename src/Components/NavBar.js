import React, { Component } from "react";
import "../Css/Dashboard.css";

export default class NavBar extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    const name = resul.Username;
    const pic = resul.Avatar;
    return (
        <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right" data-target="slide-out">
          <img src={pic} alt="profile" className="Navbar-Avatar" />
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}
