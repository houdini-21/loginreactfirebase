import React, { Component } from "react";
import "../Css/Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="body">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );
  }
}
