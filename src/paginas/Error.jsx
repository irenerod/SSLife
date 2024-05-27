import React, { Fragment } from "react";
import "../estilos/Error.css";
import imageError from "../assets/img/error.png";
const Error = () => {
  return (
    <Fragment>
      <div className="divError">
        <h2>ERROR</h2>
       
       
      </div>
      <div className="divError">
        <img className="imgError" src={imageError} alt="Error"/>
      </div>
    </Fragment>
  );
};

export default Error;
