import React, { Fragment } from "react";
import "../estilos/Error.css";

const Contacto = () => {
  return (
    <Fragment>
      <div className="divError">
        <h1>Hola. Estás en la zona reservada para CONTACTO.</h1>
        <h2>WIP</h2>
        <h2>Pagina en construcción</h2>
        <p>Ha habido un error, vuelve a intentarlo...</p>
      </div>
      <div className="divError">
        <img className="imgError" src="./src/assets/img/error.png" alt="Error"/>
      </div>
    </Fragment>
  );
};

export default Contacto;
