import React, { Fragment } from "react";
import useUsuarios from "../../hooks/useUsuarios";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Caelestis from "../Caelestis/Caelestis";

const InicioSesion = () => {
  const { sesionIniciada, cerrarSesion } = useUsuarios();
  return (
    <Fragment>
      <div className="fixed-top d-flex justify-content-end row-reverse">
            <div className="col-md-auto" >
              {sesionIniciada ? (
                <Button color="danger" size="lg" className="float-left mt-2"
                  onClick={() => {
                    cerrarSesion();
                  }}
                >  
                <i className="bi bi-box-arrow-right">
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
