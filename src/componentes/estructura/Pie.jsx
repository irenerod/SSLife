import React, { Fragment } from "react";
import "../../estilos/Pie.css";

const Pie = () => {
  return (
    <Fragment>
      <footer>
        <img className="creative" src="./src/assets/img/Logo en gris sin fondo.svg" alt="creativelife" />
        <ul>
          <li>Información:</li>
          <li>Contacto: creativeLife@gmail.com</li>
          <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
        </ul>
        </footer>
    </Fragment>
  );
};

export default Pie;
