import React, { Fragment } from "react";
import Rutas from "./rutas/Rutas.jsx";
import Caelestis from "../Caelestis/Caelestis.jsx";

const Principal = () => {
  return (
    <Fragment>
      <article id='principal'>
        <Rutas />
      </article>
      <Caelestis/>
    </Fragment>
  );
};

export default Principal;
