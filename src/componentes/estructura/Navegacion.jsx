import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navegacion.css";
import useUsuarios from "../../hooks/useUsuarios";

const Navegacion = () => {
  // Tiene que estar la sesión iniciada para poder ver las siguientes opciones de navegación.
  const {sesionIniciada}=useUsuarios();

  return (
    <Fragment>
      <nav>
        {sesionIniciada && (
          <>
            <Link className='enlace' to='inicio'>
              Inicio
            </Link>
            {/**
            <Link className='enlace' to='/'>
              Bienvenida
            </Link>
            <Link className='enlace' to='sobre'>
              Sobre SSLife
            </Link>
            <Link className='enlace' to='recursos'>
              Recursos
            </Link>
            <Link className='enlace' to='contacto'>
              Contacto
            </Link>
             */}
          </>
        )}
      </nav>
    </Fragment>
  );
};

export default Navegacion;
