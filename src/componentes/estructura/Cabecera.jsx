import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import MenuCabecera from "./MenuCabecera";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/Cabecera.css";

const Cabecera = () => {
  return (
    <Fragment>
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

