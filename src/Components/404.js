import React, { Component } from 'react';
import '../Css/404.css';
import { Link } from "react-router-dom";


export default class notFound extends Component {
  render() {
    return (
      <div id='container'>
        <div className="content">
            <h2>404</h2>
            <h4>Opps! Page not found</h4>
            <p>the page you were looking for doesn't exit</p>
            <Link to="/Signin">Back to Home</Link>
        </div>
      </div>
    )
  }
}
