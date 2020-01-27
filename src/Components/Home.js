import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faUserPlus	 } from '@fortawesome/free-solid-svg-icons';
import video from '../Css/Homevid.mp4'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="banner">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <Link className="fa" to='/Signin' aria-hidden="true"><FontAwesomeIcon icon={faUserPlus} /></Link>
                <Link className="fa" to='/Signup' aria-hidden="true"><FontAwesomeIcon icon={faSignInAlt} /></Link>
            </div>
            </React.Fragment>
        )
    }
}
