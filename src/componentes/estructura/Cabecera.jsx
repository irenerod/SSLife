import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import MenuCabecera from "./MenuCabecera";
import "../../estilos/Cabecera.css";

const Cabecera = () => {
  return (
    <Fragment>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
    </head>
          <header>
            <div className="cabecera">
              <img
                className="logo"
                src="./src/assets/img/LogosinFondo.png" alt="logo"/>
                
            </div>
            <MenuCabecera />
          </header>
    </Fragment>
  );
};

export default Cabecera;

