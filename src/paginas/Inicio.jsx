import React, { Fragment } from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="inicio">
          <img className="logoIni" src="./src/assets/img/Logo SS Life.png" alt="logo" width="100px"/>
          <h1>Inicio</h1>
        </div>
        <div className="opciones">
          <div className="exclamacion">
            <img src="./src/assets/img/exclamacion.png" alt="exclamacion" width="500px" />
          </div>
          <div className="opciones-content">
            <div className="sobreSSL">
              <h2>Sobre SSLife</h2>
            </div>
            <div className="recursos">
              <h2>Recursos</h2>
            </div>
            <div className="contacto">
              <h2>Contacta con nosotros</h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;
