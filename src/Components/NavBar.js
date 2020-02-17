import React, { Component } from "react";
import "../Css/Dashboard.scss";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    const resul = JSON.parse(localStorage.getItem("User"));
    const pic = resul.Avatar;
    return (
        <div>
      <nav>
        <div className="nav-wrapper">
          <Link to='#' className="brand-logo right" data-target="slide-out">
          <img src={pic} alt="profile" className="Navbar-Avatar" />
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to='#'>Sass</Link>
            </li>
            <li>
              <Link to='#'>Components</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}
