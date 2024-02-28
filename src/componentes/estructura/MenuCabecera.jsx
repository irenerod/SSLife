import React, { Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import InicioSesion from './InicioSesion';
import Navegacion from './Navegacion';

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
        <BreadcrumbItem><a href="/">HomePage</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/contacto">Conócenos</a></BreadcrumbItem>       
        <Navegacion/>
      </Breadcrumb>
      <div className='inicioSesion'>
        <InicioSesion />

      </div>
    </Fragment>
  );
}

export default MenuCabecera;
