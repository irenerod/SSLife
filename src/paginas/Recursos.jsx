import React, { Fragment } from "react";
import "../estilos/Recursos.css";
import { Link } from "react-router-dom";

const Recursos = () => {
  return (
    <Fragment>
      <div className="contenedor">
        <div className="inicio">
          <img className="logoIni" src="./src/assets/img/Logo SS Life.png" alt="logo" width="100px"/>
          <h1>Recursos</h1>
        </div>
        <div className="opciones">
          <div className="opciones-contenedor">
            <Link to="/articulos">
              <div className="articulos">
                <h2>Artículos</h2>
              </div>
            </Link>
            <Link to="/videos">
              <div className="videos">
                <h2>Videos</h2>
              </div>
            </Link>
            <Link to="/foros">
              <div className="foros">
                <h2>Foro</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Recursos;
