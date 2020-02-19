import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import video from "../Img/Homevid.mp4";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <video
            loop
            muted
            autoPlay
            src={video}
            preload={"auto"}
            type={"video/mp4"}
            //onLoadedData={() => {
            //console.log("Data is loaded!");
            // this.setState({ isLoading: false });
            //}}
          ></video>
          <Link className="fa" to="/signup" aria-hidden="true">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
          <Link className="fa" to="/signin" aria-hidden="true">
            <FontAwesomeIcon icon={faSignInAlt} />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
