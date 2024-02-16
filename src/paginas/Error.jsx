import React, { Fragment } from "react";
import "../estilos/Error.css";

const Error = () => {
  return (
    <Fragment>
      <div className="divError">
        <h2>Error</h2>
        <p>Ha habido un error, vuelve a intentarlo...</p>
      </div>
      <div className="divError">
        <img className="imgError" src="./src/assets/img/error.png" alt="Error"/>
      </div>
    </Fragment>
  );
};

export default Error;
