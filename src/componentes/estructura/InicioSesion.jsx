import React, { Fragment } from "react";
import useUsuarios from "../../hooks/useUsuarios";
import { Button } from "reactstrap";
import Caelestis from "../Caelestis/Caelestis";

const InicioSesion = () => {
  const { sesionIniciada, cerrarSesion } = useUsuarios();
  return (
    <Fragment>
      <head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</head>
<div className="fixed-top d-flex justify-content-end row-reverse">
      <div className="col-md-auto" >
        {sesionIniciada ? (
          <Button color="danger" size="lg" className="float-left mt-2"
            onClick={() => {
              cerrarSesion();
            }}
          >  
             <i class="bi bi-box-arrow-right">
            Cerrar sesión
            </i>
          </Button>

        )  : (
          <p>No se ha iniciado sesión todavía.</p>
        )}
      </div>
      
      </div>
    </Fragment>
  );
};

export default InicioSesion;
