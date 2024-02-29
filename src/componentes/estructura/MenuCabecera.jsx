import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import InicioSesion from './InicioSesion';
import Navegacion from './Navegacion';
import Rutas from './rutas/Rutas';

const MenuCabecera = () => {
  return (
    <Fragment>
       
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</head>
      <Breadcrumb>
        <BreadcrumbItem>
         <Link className='enlace' to='/inicio'>
              Inicio
            </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <Link className='enlace' to='/sobre'>
              Sobre SSLife
        </Link>
        </BreadcrumbItem>       
        <Navegacion/>
      </Breadcrumb>
      <div className='inicioSesion'>
        <InicioSesion />

      </div>
    </Fragment>
  );
}

export default MenuCabecera;
