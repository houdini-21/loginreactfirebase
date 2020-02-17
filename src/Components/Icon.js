import React from 'react'
import "../Css/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Eye = ({ filled, onClick }) => {
    return (
      <div onClick={onClick}>
        <FontAwesomeIcon
          icon={filled ? faEye : faEyeSlash}
          size="lg"
          color="Dodgerblue"
        />
      </div>
    );
  };
  export default Eye;

  
