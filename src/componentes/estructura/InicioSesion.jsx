import React, { Fragment } from "react";
import useUsuarios from "../../hooks/useUsuarios";

const InicioSesion = () => {
  const { sesionIniciada, cerrarSesion } = useUsuarios();
  return (
    <Fragment>
      <div>
        {sesionIniciada ? (
          <button
            onClick={() => {
              cerrarSesion();
            }}
          >
            Cerrar sesión
          </button>
        ) : (
          <p>No se ha iniciado sesión todavía.</p>
        )}
      </div>
    </Fragment>
  );
};

export default InicioSesion;
