import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import MenuCabecera from "./MenuCabecera";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/Cabecera.css";
import Navegacion from "./Navegacion";

const Cabecera = () => {
  return (
    <Fragment>
          <header>
            {/*(<MenuCabecera />*/}
                <Navegacion/>
          </header>
    </Fragment>
  );
};

export default Cabecera;

