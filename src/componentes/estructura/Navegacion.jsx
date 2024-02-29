import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../estilos/Navegacion.css";
import useUsuarios from "../../hooks/useUsuarios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Caelestis from "../Caelestis/Caelestis";
import Rutas from "./rutas/Rutas";

const Navegacion = () => {
  // Tiene que estar la sesión iniciada para poder ver las siguientes opciones de navegación.
  const {sesionIniciada}=useUsuarios();

  return (
    <Fragment>
      <head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</head>
      
      <nav>
        
        {sesionIniciada && (
          <>
            <Breadcrumb>
              <BreadcrumbItem></BreadcrumbItem>
              <BreadcrumbItem>
              <Link className='enlace' to='/recursos'>
                Recursos
              </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
              <Link className='enlace' to='/contacto'>
                Contacto
              </Link>
              </BreadcrumbItem>
            </Breadcrumb>
            {/*<Caelestis/>*/}
          </>
        )}

      </nav>
   
    </Fragment>
  );
};

export default Navegacion;
