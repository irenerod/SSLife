import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <Fragment>
      <header>
        <div className="cabecera">
          <img className="logo" src="./src/assets/img/Logo SS Life.png" alt="logo"></img>
        </div>
        <div className='inicioSesion'>
          <InicioSesion/>
        </div>
      </header>
    </Fragment>
  );
};

export default Cabecera;
