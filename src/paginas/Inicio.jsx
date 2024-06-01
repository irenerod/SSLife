import React, { Fragment } from "react";
import Que_Es_SSLIFE from "../componentes/Que_Es_SSLIFE.jsx"
import NuevoComp from "../componentes/NuevoComp.jsx"; // CAMBIAR EL NOMBRE

const Inicio = () => {
  return (
    <Fragment>
      <Que_Es_SSLIFE></Que_Es_SSLIFE>
      <NuevoComp/>
    </Fragment>
  );
};

export default Inicio;