import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/Navegacion.css";
import useUsuarios from "../../hooks/useUsuarios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
//import Caelestis from "../Caelestis/Caelestis";
import Rutas from "./rutas/Rutas";

const Navegacion = () => {
  // Tiene que estar la sesión iniciada para poder ver las siguientes opciones de navegación.
  const {sesionIniciada}=useUsuarios();

  return (
    <Fragment>      
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
          </>
        )}

      </nav>
   
    </Fragment>
  );
};

export default Navegacion;
