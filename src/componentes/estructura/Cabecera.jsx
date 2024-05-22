import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/Cabecera.css";
import Navegacion from "./Navegacion";

const Cabecera = () => {
  return (
    <Fragment>
          <header>
                <Navegacion/>
          </header>
    </Fragment>
  );
};

export default Cabecera;

