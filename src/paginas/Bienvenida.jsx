import React, { Fragment } from "react";
import "../estilos/Bienvenida.css";
import { Link } from 'react-router-dom';

const Bienvenida = () => {
  return (
    <Fragment>
      <div className="bienvenida">
        <div className="textoBienvenida">
          <p>No estás <a className="rojo">solo</a>...</p>
          <p>Conéctate.</p>
        </div>
        <img className="imgBienvenda" src="./src/assets/img/paisajesinfondo.png" alt="bienvenida"/>
        <div className="buttonContainer">
          <Link to="inicio">
            <button type="button">Descubre más</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Bienvenida;
